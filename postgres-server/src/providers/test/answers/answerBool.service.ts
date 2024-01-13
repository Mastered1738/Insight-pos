import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerBool } from 'src/entities/test/answer/answerBool.entity';
import { Repository } from 'typeorm';
import { BoolAnswerDTO } from '../../../dto/test/answers/boolAnswer.dto';

@Injectable()
export class AnswerBoolService {
  constructor(
    @InjectRepository(AnswerBool)
    private questionRepository: Repository<AnswerBool>,
  ) {}

  async createAnswer(boolAnswerDTO: BoolAnswerDTO): Promise<AnswerBool> {
    return await this.questionRepository.save({
      given_asnwer: boolAnswerDTO.given_answer,
      points: boolAnswerDTO.points,
      question_id: boolAnswerDTO.question_id,
      user_id: boolAnswerDTO.user_id,
    });
  }
}
