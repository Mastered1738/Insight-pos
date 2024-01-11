import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilePostComment } from 'src/entities/user/profilePostComment.entity';
import { ProfilePostCommentController } from '../../controllers/user/profile-post-comment.controller';
import { ProfilePostCommentService } from '../../providers/user/profile-post-comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProfilePostComment])],
  controllers: [ProfilePostCommentController],
  providers: [ProfilePostCommentService],
  exports: [ProfilePostCommentService],
})
export class ProfilePostCommentModule {}
