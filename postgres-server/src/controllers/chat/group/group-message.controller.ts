import { Body, Controller, Post } from '@nestjs/common';
import { GroupIdDTO } from 'src/dto/chat/group/groupId.dto';
import { GroupMessage } from 'src/entities/chat/group/groupMessage.entity';
import { GroupMessageService } from 'src/providers/chat/group/group-message.service';

@Controller('group-message')
export class GroupMessageController {
  constructor(private groupService: GroupMessageService) {}

  @Post()
  async getGroupMessages(
    @Body() group_id_dto: GroupIdDTO,
  ): Promise<GroupMessage[]> {
    return await this.groupService.getGroupMessagesByGroupID(
      group_id_dto.group_id,
    );
  }
}
