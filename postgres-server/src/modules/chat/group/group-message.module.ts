import { Module } from '@nestjs/common';
import { GroupMessageService } from '../../../providers/chat/group/group-message.service';
import { GroupMessageController } from '../../../controllers/chat/group/group-message.controller';
import { GroupMessage } from 'src/entities/chat/group/groupMessage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GroupMessage])],
  controllers: [GroupMessageController],
  providers: [GroupMessageService],
  exports: [GroupMessageService],
})
export class GroupMessageModule {}
