import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionOpenEnd } from 'src/entities/test/question/questionOpenEnd.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionOpenEndService {
  constructor(
    @InjectRepository(QuestionOpenEnd)
    private questionRepository: Repository<QuestionOpenEnd>,
  ) {}

  async createQuestion(): Promise<QuestionOpenEnd> {}
}
