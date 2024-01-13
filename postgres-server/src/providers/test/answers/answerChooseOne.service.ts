import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerChooseOne } from 'src/entities/test/answer/answerChooseOne.entity';
import { Repository } from 'typeorm';
import { ChooseOneAnswerDTO } from '../../../dto/test/answers/chooseOneAnswer.dto';

@Injectable()
export class AnswerChooseOneService {
  constructor(
    @InjectRepository(AnswerChooseOne)
    private questionRepository: Repository<AnswerChooseOne>,
  ) {}

  async createAnswer(
    chooseOneDTO: ChooseOneAnswerDTO,
  ): Promise<AnswerChooseOne> {
    return await this.questionRepository.save({
      given_asnwer: chooseOneDTO.given_answer,
      points: chooseOneDTO.points,
      question_id: chooseOneDTO.question_id,
      user_id: chooseOneDTO.user_id,
    });
  }
}
