import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectPostCommentController } from 'src/controllers/subjects/subjectPostComment.controller';
import { SubjectPostComment } from 'src/entities/subjects/subjectPostComment.entity';
import { SubjectPostCommentService } from 'src/providers/subjects/subjectPostComment.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectPostComment])],
  controllers: [SubjectPostCommentController],
  providers: [SubjectPostCommentService],
  exports: [SubjectPostCommentService],
})
export class SubjectPostCommentModule {}
