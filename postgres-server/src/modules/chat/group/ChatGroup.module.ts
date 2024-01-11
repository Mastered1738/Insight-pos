import { Module } from '@nestjs/common';
import { ChatGroupService } from '../../../providers/chat/group/ChatGroup.service';
import { ChatGroup } from 'src/entities/chat/group/chatGroup.entity';
import { ChatGroupController } from '../../../controllers/chat/group/ChatGroup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ChatGroup])],
  controllers: [ChatGroupController],
  providers: [ChatGroupService],
  exports: [ChatGroupService],
})
export class ChatGroupModule {}
