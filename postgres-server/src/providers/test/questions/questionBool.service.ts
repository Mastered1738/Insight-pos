import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionBool } from 'src/entities/test/question/questionBool.entity';
import { Repository } from 'typeorm';
import { BoolQuestionDTO } from '../../../dto/test/questions/boolQuestion.dto';

@Injectable()
export class QuestionBoolService {
  constructor(
    @InjectRepository(QuestionBool)
    private questionRepository: Repository<QuestionBool>,
  ) {}

  async createQuestion(
    boolQuestionDTO: BoolQuestionDTO,
  ): Promise<QuestionBool> {
    return await this.questionRepository.save({
      text: boolQuestionDTO.text,
      answer: boolQuestionDTO.answer,
      point_value: boolQuestionDTO.point_value,
      test_id: boolQuestionDTO.test_id,
    });
  }
}
