import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServerGroupDTO } from 'src/dto/userServer/serverGroup.dto';
import { ServerGroup } from 'src/entities/userServer/serverGroup.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServerGroupService {
  constructor(
    @InjectRepository(ServerGroup)
    private serverGroupRepository: Repository<ServerGroup>,
  ) {}

  async createServerGroup(
    serverGroupDto: ServerGroupDTO,
  ): Promise<ServerGroup> {
    return await this.serverGroupRepository.save({
      relations: ['group_creator'],
      group_name: serverGroupDto.group_name,
      where: {
        group_creator: {
          user_id: serverGroupDto.group_creator_id,
        },
      },
    });
  }

  async getServerGroupByUser(user_id: number): Promise<ServerGroup[]> {
    return await this.serverGroupRepository.find({
      relations: ['group_creator'],
      where: {
        group_creator: {
          user_id: user_id,
        },
      },
    });
  }
}
