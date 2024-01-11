import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServerGroupPostController } from 'src/controllers/userServer/serverGroupPost.controller';
import { ServerGroupPost } from 'src/entities/userServer/serverGroupPost.entity';
import { ServerGroupPostService } from 'src/providers/userServer/serverGroupPost.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServerGroupPost])],
  controllers: [ServerGroupPostController],
  providers: [ServerGroupPostService],
  exports: [ServerGroupPostService],
})
export class ServerGroupPostModule {}
