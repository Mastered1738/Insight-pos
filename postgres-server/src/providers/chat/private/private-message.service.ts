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

  async getPrivateMessagesByUserID(user_id: number): Promise<PrivateMessage[]> {
    const tryFindBySenderID = await this.messageRepository.find({
      relations: ['sender_id'],
      where: {
        sender_id: {
          user_id: user_id,
        },
      },
    });

    if (tryFindBySenderID == undefined) {
      const tryFindByReceiverID = await this.messageRepository.find({
        relations: ['receiver_id'],
        where: {
          receiver_id: {
            user_id: user_id,
          },
        },
      });
      return tryFindByReceiverID;
    } else {
      return tryFindBySenderID;
    }
  }
}
