import { AnswerBool } from 'src/entities/test/answer/answerBool.entity';
import { AnswerChooseOne } from 'src/entities/test/answer/answerChooseOne.entity';
import { AnswerOpenEnd } from 'src/entities/test/answer/answerOpenEnd.entity';

export class AllTestAnswers {
  boolAnswers: AnswerBool[];
  chooseOneAnswers: AnswerChooseOne[];
  openEndAnswers: AnswerOpenEnd[];
}
