import { Module } from '@nestjs/common';
import { PrivateMessageController } from '../../controllers/chat/private/private-message.controller';
import { PrivateMessage } from 'src/entities/chat/private/privateMessage.entity';
import { PrivateMessageService } from '../../providers/chat/private-message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrivateMessageWebSocketGateway } from '../../gateways/private-message.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([PrivateMessage])],
  controllers: [PrivateMessageController],
  providers: [PrivateMessageService, PrivateMessageWebSocketGateway],
  exports: [PrivateMessageService],
})
export class PrivateMessageModule {}
