import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OpenEndAnswerDTO } from 'src/dto/test/answers/openEndAnswer.dto';
import { AnswerOpenEnd } from 'src/entities/test/answer/answerOpenEnd.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerOpenEndService {
  constructor(
    @InjectRepository(AnswerOpenEnd)
    private questionRepository: Repository<AnswerOpenEnd>,
  ) {}

  async createAnswer(openEndDTO: OpenEndAnswerDTO): Promise<AnswerOpenEnd> {
    return await this.questionRepository.save({
      given_answer: openEndDTO.given_answer,
      points: openEndDTO.points,
      question_id: openEndDTO.question_id,
      user_id: openEndDTO.user_id,
    });
  }
}
