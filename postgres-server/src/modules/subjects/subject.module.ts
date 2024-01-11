import { Module } from '@nestjs/common';
import { SubjectController } from '../../controllers/subjects/subject.controller';
import { SubjectService } from '../../providers/subjects/subject.service';
import { UniSubject } from 'src/entities/subjects/uniSubject.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UniSubject, User])],
  controllers: [SubjectController],
  providers: [SubjectService],
  exports: [SubjectService],
})
export class SubjectModule {}
