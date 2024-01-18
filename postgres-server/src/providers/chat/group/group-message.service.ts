import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupMessage } from 'src/entities/chat/group/groupMessage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupMessageService {
  constructor(
    @InjectRepository(GroupMessage)
    private groupMessageRepository: Repository<GroupMessage>,
  ) {}

  async getGroupMessagesByGroupID(group_id: number): Promise<GroupMessage[]> {
    return await this.groupMessageRepository.find({
      relations: ['group_id'],
      where: {
        group_id: {
          group_id: group_id,
        },
      },
      select: {
        message_id: true,
        content: true,
        timestamp: true,
        group_id: {
          group_id: true,
          group_messages: false,
          group_name: false,
        },
        sender_id: {
          user_id: true,
          username: true,
          password: false,
          profile_file: true,
        },
      },
      order: {
        timestamp: 'DESC',
      },
      take: 30,
    });
  }
}
