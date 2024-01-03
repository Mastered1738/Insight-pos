import { Module } from '@nestjs/common';
import { ProfilePostService } from './profile-post.service';
import { ProfilePostController } from './profile-post.controller';
import { ProfilePost } from 'src/entities/profilePost.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfilePost])],
  controllers: [ProfilePostController],
  providers: [ProfilePostService],
  exports: [ProfilePostService],
})
export class ProfilePostModule {}
