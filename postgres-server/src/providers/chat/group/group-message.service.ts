import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupMessageDTO } from 'src/dto/chat/group/groupMessage.dto';
import { ChatGroup } from 'src/entities/chat/group/chatGroup.entity';
import { GroupMessage } from 'src/entities/chat/group/groupMessage.entity';
import { User } from 'src/entities/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupMessageService {
  constructor(
    @InjectRepository(GroupMessage)
    private groupMessageRepository: Repository<GroupMessage>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(ChatGroup)
    private chatGroupRepository: Repository<ChatGroup>,
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

  async createMessage(message: GroupMessageDTO): Promise<GroupMessage> {
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

    const group = await this.chatGroupRepository.findOne({
      where: {
        group_id: message.group_id,
      },
      select: {
        group_id: true,
        group_messages: false,
        group_name: false,
      },
    });

    const newMessage = new GroupMessage();
    newMessage.group_id = group;
    newMessage.sender_id = sender;
    newMessage.content = message.content;

    return await this.groupMessageRepository.save(newMessage);
  }
}
