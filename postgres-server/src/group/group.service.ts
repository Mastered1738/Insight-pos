import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from 'src/entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {}

  async getMyGroups(): Promise<Group[]> {
    return this.groupRepository.find({
      relations: ['user'],
      where: {
        user: {
          user_id: 1,
        },
      },
    });
  }
}
