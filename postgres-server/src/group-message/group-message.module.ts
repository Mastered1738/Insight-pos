import { Module } from '@nestjs/common';
import { GroupMessageService } from './group-message.service';
import { GroupMessageController } from './group-message.controller';
import { GroupMessage } from 'src/entities/groupMessage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GroupMessage])],
  controllers: [GroupMessageController],
  providers: [GroupMessageService],
  exports: [GroupMessageService],
})
export class GroupMessageModule {}
