import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionBoolController } from 'src/controllers/test/questions/questionBool.controller';
import { QuestionBool } from 'src/entities/test/question/questionBool.entity';
import { QuestionBoolService } from 'src/providers/test/questions/questionBool.service';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionBool])],
  controllers: [QuestionBoolController],
  providers: [QuestionBoolService],
  exports: [QuestionBoolService],
})
export class QuestionBoolModule {}
