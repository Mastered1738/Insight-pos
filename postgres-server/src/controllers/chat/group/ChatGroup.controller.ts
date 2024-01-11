import { Body, Controller, Post } from '@nestjs/common';
import { ChatGroupService } from '../../../providers/chat/group/ChatGroup.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { user_id_DTO } from 'src/dto/user/user_id.dto';
import { ChatGroup } from 'src/entities/chat/group/chatGroup.entity';

@Controller('/group')
export class ChatGroupController {
  constructor(private readonly chatGroupService: ChatGroupService) {}

  @Post('/myGroups')
  async getMyGroups(@Body() user_id_DTO: user_id_DTO): Promise<ChatGroup[]> {
    return await this.chatGroupService.getMyGroups(user_id_DTO);
  }
}
