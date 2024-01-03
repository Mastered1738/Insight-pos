import { Module } from '@nestjs/common';
import { PrivateMessageController } from './private-message.controller';
import { PrivateMessage } from 'src/entities/privateMessage.entity';
import { PrivateMessageService } from './private-message.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PrivateMessage])],
  controllers: [PrivateMessageController],
  providers: [PrivateMessageService],
  exports: [PrivateMessageService],
})
export class PrivateMessageModule {}
