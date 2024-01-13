import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionChooseOne } from 'src/entities/test/question/questionChooseOne.entity';
import { Repository } from 'typeorm';
import { ChooseOneQuestionDTO } from '../../../dto/test/questions/chooseOneQuestion.dto';

@Injectable()
export class QuestionChooseOneService {
  constructor(
    @InjectRepository(QuestionChooseOne)
    private questionRepository: Repository<QuestionChooseOne>,
  ) {}

  async createQuestion(
    chooseOneDTO: ChooseOneQuestionDTO,
  ): Promise<QuestionChooseOne> {
    return await this.questionRepository.save({
      text: chooseOneDTO.text,
      option_a: chooseOneDTO.option_a,
      option_b: chooseOneDTO.option_b,
      option_c: chooseOneDTO.option_c,
      option_d: chooseOneDTO.option_d,
      option_e: chooseOneDTO.option_e,
      option_f: chooseOneDTO.option_f,
      test_id: chooseOneDTO.test_id,
    });
  }
}
