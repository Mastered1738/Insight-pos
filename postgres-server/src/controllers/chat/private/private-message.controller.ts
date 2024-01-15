import { Body, Controller, Post } from '@nestjs/common';
import { PrivateMessageService } from 'src/providers/chat/private/private-message.service';
import { user_id_DTO } from '../../../dto/user/user_id.dto';
import { PrivateMessage } from 'src/entities/chat/private/privateMessage.entity';

@Controller('private-messages')
export class PrivateMessageController {
  constructor(private readonly messageService: PrivateMessageService) {}

  @Post('/by-user-id')
  async getPrivateMessages(
    @Body() userid_DTO: user_id_DTO,
  ): Promise<PrivateMessage[]> {
    return await this.messageService.getPrivateMessagesByUserID(
      userid_DTO.user_id,
    );
  }
}
