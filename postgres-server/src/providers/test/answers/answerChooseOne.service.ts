import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerChooseOne } from 'src/entities/test/answer/answerChooseOne.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerChooseOneService {
  constructor(
    @InjectRepository(AnswerChooseOne)
    private questionRepository: Repository<AnswerChooseOne>,
  ) {}

  // async createQuestion(): Promise<AnswerChooseOne> {}
}
