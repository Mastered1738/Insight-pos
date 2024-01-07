import { Module } from '@nestjs/common';
import { ChatGroupService } from './ChatGroup.service';
import { ChatGroup } from 'src/entities/chatGroup.entity';
import { ChatGroupController } from './ChatGroup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ChatGroup])],
  controllers: [ChatGroupController],
  providers: [ChatGroupService],
  exports: [ChatGroupService],
})
export class ChatGroupModule {}
