import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionOpenEndController } from 'src/controllers/test/questions/questionOpenEnd.controller';
import { QuestionOpenEnd } from 'src/entities/test/question/questionOpenEnd.entity';
import { QuestionOpenEndService } from 'src/providers/test/questions/questionOpenEnd.service';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionOpenEnd])],
  controllers: [QuestionOpenEndController],
  providers: [QuestionOpenEndService],
  exports: [QuestionOpenEndService],
})
export class QuestionOpenEndModule {}
