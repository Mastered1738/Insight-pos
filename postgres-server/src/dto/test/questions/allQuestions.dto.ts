import { QuestionBool } from 'src/entities/test/question/questionBool.entity';
import { QuestionChooseOne } from 'src/entities/test/question/questionChooseOne.entity';
import { QuestionOpenEnd } from 'src/entities/test/question/questionOpenEnd.entity';

export class AllTestQuestions {
  boolQuestions: QuestionBool[];
  chooseOneQuestions: QuestionChooseOne[];
  openEndQuestions: QuestionOpenEnd[];
}
