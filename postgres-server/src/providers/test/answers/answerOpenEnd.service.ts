import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerOpenEnd } from 'src/entities/test/answer/answerOpenEnd.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerOpenEndService {
  constructor(
    @InjectRepository(AnswerOpenEnd)
    private questionRepository: Repository<AnswerOpenEnd>,
  ) {}

  async createQuestion(): Promise<AnswerOpenEnd> {}
}
