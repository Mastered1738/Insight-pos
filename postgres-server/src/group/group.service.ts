import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_id_DTO } from 'src/dto/userDto/user_id.dto';
import { Group } from 'src/entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {}

  async getMyGroups(user_id_DTO: user_id_DTO): Promise<Group[]> {
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
