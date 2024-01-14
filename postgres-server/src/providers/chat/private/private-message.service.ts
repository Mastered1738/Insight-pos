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

  async getPrivateMessageChats(user_id: number): Promise<PrivateMessage[]> {
    return await this.messageRepository.find({
      relations: ['receiver_id', 'sender_id'],
      where: [
        {
          receiver_id: { user_id: user_id },
        },
        {
          sender_id: { user_id: user_id },
        },
      ],
      select: {
        message_id: false,
        content: false,
        timestamp: false,
        read_status: false,
        receiver_id: {
          user_id: true,
          username: true,
          profile_file: true,
          password: false,
          cover_file: false,
        },
        sender_id: {
          user_id: true,
          username: true,
          profile_file: true,
          password: false,
          cover_file: false,
        },
      },
    });
  }
}
