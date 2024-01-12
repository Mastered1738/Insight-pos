import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerBool } from 'src/entities/test/answer/answerBool.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerBoolService {
  constructor(
    @InjectRepository(AnswerBool)
    private questionRepository: Repository<AnswerBool>,
  ) {}

  async createQuestion(): Promise<AnswerBool> {}
}
