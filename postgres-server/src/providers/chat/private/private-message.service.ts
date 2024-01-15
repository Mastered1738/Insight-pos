import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrivateMessage } from 'src/entities/chat/private/privateMessage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrivateMessageService {
  constructor(
    @InjectRepository(PrivateMessage)
    private messageRepository: Repository<PrivateMessage>,
  ) {}

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
        relations: ['receiver_id'],
        where: {
          receiver_id: {
            user_id: user_id,
          },
        },
        select: {
          sender_id: {
            user_id: true,
            username: true,
            password: false,
            cover_file: false,
            profile_file: false,
          },
          receiver_id: {
            user_id: true,
            username: true,
            password: false,
            cover_file: false,
            profile_file: false,
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
