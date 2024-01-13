import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerBoolController } from 'src/controllers/test/answers/answerBool.controller';
import { AnswerBool } from 'src/entities/test/answer/answerBool.entity';
import { AnswerChooseOne } from 'src/entities/test/answer/answerChooseOne.entity';
import { AnswerOpenEnd } from 'src/entities/test/answer/answerOpenEnd.entity';
import { AnswerBoolService } from 'src/providers/test/answers/answerBool.service';
import { GlobalAnswerService } from 'src/providers/test/answers/answerGlobal.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnswerBool, AnswerChooseOne, AnswerOpenEnd]),
  ],
  controllers: [AnswerBoolController],
  providers: [AnswerBoolService, GlobalAnswerService],
  exports: [AnswerBoolService, GlobalAnswerService],
})
export class AnswerBoolModule {}
