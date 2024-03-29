import { Module } from '@nestjs/common';
import { SubjectPostController } from '../../controllers/subjects/subject-post.controller';
import { SubjectPost } from 'src/entities/subjects/subjectPost.entity';
import { SubjectPostService } from '../../providers/subjects/subject-post.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectPost])],
  controllers: [SubjectPostController],
  providers: [SubjectPostService],
  exports: [SubjectPostService],
})
export class SubjectPostModule {}
