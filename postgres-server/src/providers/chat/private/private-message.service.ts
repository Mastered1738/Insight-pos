import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrivateMessageDTO } from 'src/dto/chat/private/PrivateMessage.dto';
import { PrivateMessage } from 'src/entities/chat/private/privateMessage.entity';
import { User } from 'src/entities/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrivateMessageService {
  constructor(
    @InjectRepository(PrivateMessage)
    private messageRepository: Repository<PrivateMessage>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createMessage(message: PrivateMessageDTO): Promise<PrivateMessage> {
    // Find sender and receiver entities based on their IDs
    const sender = await this.userRepository.findOne({
      where: {
        user_id: message.sender_id,
      },
      select: {
        user_id: true,
        username: false,
        password: false,
        cover_file: false,
        profile_file: true,
      },
    });
    const receiver = await this.userRepository.findOne({
      where: {
        user_id: message.receiver_id,
      },
      select: {
        user_id: true,
        username: false,
        password: false,
        cover_file: false,
        profile_file: true,
      },
    });

    // Create a new PrivateMessage instance
    const newMessage = new PrivateMessage();
    newMessage.sender_id = sender;
    newMessage.receiver_id = receiver;
    newMessage.content = message.content;

    // Save the new PrivateMessage instance
    return await this.messageRepository.save(newMessage);
  }

  async getPrivateMessagesByUserID(
    user_id: number,
    other_user_id: number,
  ): Promise<PrivateMessage[]> {
    const tryFindBySenderID = await this.messageRepository.find({
      relations: ['sender_id', 'receiver_id'],
      where: [
        {
          sender_id: { user_id: user_id },
          receiver_id: { user_id: other_user_id },
        },
        {
          receiver_id: { user_id: user_id },
          sender_id: { user_id: other_user_id },
        },
      ],
      select: {
        sender_id: {
          user_id: true,
          username: true,
          password: false,
          cover_file: false,
          profile_file: true,
        },
        receiver_id: {
          user_id: true,
          username: true,
          password: false,
          cover_file: false,
          profile_file: true,
        },
      },
      order: {
        timestamp: 'DESC',
      },
      take: 30,
    });

    if (tryFindBySenderID == undefined) {
      const tryFindByReceiverID = await this.messageRepository.find({
        relations: ['sender_id', 'receiver_id'],
        where: [
          {
            sender_id: { user_id: user_id },
            receiver_id: { user_id: other_user_id },
          },
          {
            receiver_id: { user_id: user_id },
            sender_id: { user_id: other_user_id },
          },
        ],
        select: {
          sender_id: {
            user_id: true,
            username: true,
            password: false,
            cover_file: false,
            profile_file: true,
          },
          receiver_id: {
            user_id: true,
            username: true,
            password: false,
            cover_file: false,
            profile_file: true,
          },
        },
        order: {
          timestamp: 'DESC',
        },
        take: 30,
      });
      return tryFindByReceiverID;
    } else {
      return tryFindBySenderID;
    }
  }
}
