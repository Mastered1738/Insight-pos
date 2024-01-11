import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServerGroupController } from 'src/controllers/userServer/serverGroup.controller';
import { ServerGroup } from 'src/entities/userServer/serverGroup.entity';
import { ServerGroupService } from 'src/providers/userServer/serverGroup.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServerGroup])],
  controllers: [ServerGroupController],
  providers: [ServerGroupService],
  exports: [ServerGroupService],
})
export class ServerGroupModule {}
