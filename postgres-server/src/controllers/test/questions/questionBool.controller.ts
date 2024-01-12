import { Controller, Post } from '@nestjs/common';
import { AllTestQuestions } from 'src/dto/test/allQuestions.dto';
import { GlobalQuestionService } from 'src/providers/test/questions/questionGlobal.service';

@Controller('/boolQuestions')
export class QuestionBoolController {
  constructor(private readonly allQuestionService: GlobalQuestionService) {}

  @Post('/getAllTestQuestions')
  async getAllQuetionsByTest(test_id: number): Promise<AllTestQuestions> {
    return await this.allQuestionService.getAllQuestionsByTest(test_id);
  }
}
