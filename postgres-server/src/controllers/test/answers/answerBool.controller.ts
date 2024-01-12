import { Controller, Post } from '@nestjs/common';
import { GlobalAnswerService } from '../../../providers/test/answers/answerGlobal.service';
import { AllTestAnswers } from 'src/dto/test/allAnswers.dto';

@Controller('/boolAnswers')
export class AnswerBoolController {
  constructor(private readonly answerService: GlobalAnswerService) {}

  @Post('/getAllAnswersByTestAndUser')
  async getAllAnswersByTestAndUser(
    user_id: number,
    test_id: number,
  ): Promise<AllTestAnswers> {
    return this.answerService.getAllAnswersByTestAndUser(user_id, test_id);
  }
}
