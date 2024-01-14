import { Body, Controller, Post } from '@nestjs/common';
import { user_id_DTO } from 'src/dto/user/user_id.dto';
import { PrivateMessage } from 'src/entities/chat/private/privateMessage.entity';
import { PrivateMessageService } from 'src/providers/chat/private/private-message.service';

@Controller('private-message')
export class PrivateMessageController {
  constructor(private readonly messageService: PrivateMessageService) {}

  @Post('/get-private-chats')
  async getPrivateMessageChats(
    @Body() user_id: user_id_DTO,
  ): Promise<PrivateMessage[]> {
    return await this.messageService.getPrivateMessageChats(user_id.user_id);
  }
}
