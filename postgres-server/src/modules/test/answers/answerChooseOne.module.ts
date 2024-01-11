import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerChooseOneController } from 'src/controllers/test/answers/answerChooseOne.controller';
import { AnswerChooseOne } from 'src/entities/test/answer/answerChooseOne.entity';
import { AnswerChooseOneService } from 'src/providers/test/answers/answerChooseOne.service';

@Module({
  imports: [TypeOrmModule.forFeature([AnswerChooseOne])],
  controllers: [AnswerChooseOneController],
  providers: [AnswerChooseOneService],
  exports: [AnswerChooseOneService],
})
export class AnswerChooseOneModule {}
