import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_id_DTO } from 'src/dto/user/user_id.dto';
import { ChatGroup } from 'src/entities/chat/group/chatGroup.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatGroupService {
  constructor(
    @InjectRepository(ChatGroup)
    private readonly groupRepository: Repository<ChatGroup>,
  ) {}

  async getMyGroups(user_id_DTO: user_id_DTO): Promise<ChatGroup[]> {
    return this.groupRepository.find({
      relations: ['user'],
      where: {
        user: {
          user_id: user_id_DTO.user_id,
        },
      },
      select: {
        group_id: true,
        group_name: true,
        user: {
          user_id: false,
          username: false,
          password: false,
        },
      },
    });
  }
}
