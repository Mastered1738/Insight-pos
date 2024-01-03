import { Controller, Post } from '@nestjs/common';
import { Group } from 'src/entities/group.entity';
import { GroupService } from './group.service';

@Controller('/group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post('/myGroups')
  async getMyGroups(): Promise<Group[]> {
    return await this.groupService.getMyGroups();
  }
}
