import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OpenEndQuestionDTO } from 'src/dto/test/questions/openEndQuestion.dto';
import { QuestionOpenEnd } from 'src/entities/test/question/questionOpenEnd.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionOpenEndService {
  constructor(
    @InjectRepository(QuestionOpenEnd)
    private questionRepository: Repository<QuestionOpenEnd>,
  ) {}

  async createQuestion(
    openEndQuestionDTO: OpenEndQuestionDTO,
  ): Promise<QuestionOpenEnd> {
    return await this.questionRepository.save({
      text: openEndQuestionDTO.text,
      answer: openEndQuestionDTO.answer,
      point_value: openEndQuestionDTO.point_value,
      test_id: openEndQuestionDTO.test_id,
    });
  }
}
