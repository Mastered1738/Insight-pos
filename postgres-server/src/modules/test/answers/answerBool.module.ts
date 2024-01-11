import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerBoolController } from 'src/controllers/test/answers/answerBool.controller';
import { AnswerBool } from 'src/entities/test/answer/answerBool.entity';
import { AnswerBoolService } from 'src/providers/test/answers/answerBool.service';

@Module({
  imports: [TypeOrmModule.forFeature([AnswerBool])],
  controllers: [AnswerBoolController],
  providers: [AnswerBoolService],
  exports: [AnswerBoolService],
})
export class AnswerBoolModule {}
