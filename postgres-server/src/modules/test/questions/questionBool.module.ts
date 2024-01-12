import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionBoolController } from 'src/controllers/test/questions/questionBool.controller';
import { QuestionBool } from 'src/entities/test/question/questionBool.entity';
import { QuestionChooseOne } from 'src/entities/test/question/questionChooseOne.entity';
import { QuestionOpenEnd } from 'src/entities/test/question/questionOpenEnd.entity';
import { QuestionBoolService } from 'src/providers/test/questions/questionBool.service';
import { GlobalQuestionService } from 'src/providers/test/questions/questionGlobal.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      QuestionBool,
      QuestionOpenEnd,
      QuestionChooseOne,
    ]),
  ],
  controllers: [QuestionBoolController],
  providers: [QuestionBoolService, GlobalQuestionService],
  exports: [QuestionBoolService, GlobalQuestionService],
})
export class QuestionBoolModule {}
