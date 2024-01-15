import { Body, Controller, Post } from '@nestjs/common';
import { PrivateMessageService } from 'src/providers/chat/private/private-message.service';
import { PrivateMessage } from 'src/entities/chat/private/privateMessage.entity';
import { UserChatDTO } from 'src/dto/chat/private/UserChat.dto';

@Controller('private-messages')
export class PrivateMessageController {
  constructor(private readonly messageService: PrivateMessageService) {}

  @Post('/by-user-id')
  async getPrivateMessages(
    @Body() userchat: UserChatDTO,
  ): Promise<PrivateMessage[]> {
    return await this.messageService.getPrivateMessagesByUserID(
      userchat.user_id,
      userchat.other_user_id,
    );
  }
}
