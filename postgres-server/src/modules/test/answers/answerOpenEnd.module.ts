import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerOpenEndController } from 'src/controllers/test/answers/answerOpenEnd.controller';
import { AnswerOpenEnd } from 'src/entities/test/answer/answerOpenEnd.entity';
import { AnswerOpenEndService } from 'src/providers/test/answers/answerOpenEnd.service';

@Module({
  imports: [TypeOrmModule.forFeature([AnswerOpenEnd])],
  controllers: [AnswerOpenEndController],
  providers: [AnswerOpenEndService],
  exports: [AnswerOpenEndService],
})
export class AnswerOpenEndModule {}
