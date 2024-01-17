import { Module } from '@nestjs/common';
import { PrivateMessageController } from '../../../controllers/chat/private/private-message.controller';
import { PrivateMessage } from 'src/entities/chat/private/privateMessage.entity';
import { PrivateMessageService } from '../../../providers/chat/private/private-message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrivateMessageWebSocketGateway } from '../../../gateways/private-message.gateway';
import { User } from 'src/entities/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrivateMessage, User])],
  controllers: [PrivateMessageController],
  providers: [PrivateMessageService, PrivateMessageWebSocketGateway],
  exports: [PrivateMessageService],
})
export class PrivateMessageModule {}
