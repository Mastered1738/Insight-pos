import { Controller } from '@nestjs/common';
import { PrivateMessageService } from 'src/providers/chat/private/private-message.service';

@Controller('private-message')
export class PrivateMessageController {
  constructor(private readonly messageService: PrivateMessageService) {}
}
