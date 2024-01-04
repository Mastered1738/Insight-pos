import { Body, Controller, Post } from '@nestjs/common';
import { Group } from 'src/entities/group.entity';
import { GroupService } from './group.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { user_id_DTO } from 'src/dto/userDto/user_id.dto';

@Controller('/group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post('/myGroups')
  async getMyGroups(@Body() user_id_DTO: user_id_DTO): Promise<Group[]> {
    return await this.groupService.getMyGroups(user_id_DTO);
  }
}
