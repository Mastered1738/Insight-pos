import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilePostComment } from 'src/entities/profilePostComment.entity';
import { ProfilePostCommentController } from './profile-post-comment.controller';
import { ProfilePostCommentService } from './profile-post-comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProfilePostComment])],
  controllers: [ProfilePostCommentController],
  providers: [ProfilePostCommentService],
  exports: [ProfilePostCommentService],
})
export class ProfilePostCommentModule {}
