import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionChooseOne } from 'src/entities/test/question/questionChooseOne.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionChooseOneService {
  constructor(
    @InjectRepository(QuestionChooseOne)
    private questionRepository: Repository<QuestionChooseOne>,
  ) {}

  async createQuestion(): Promise<QuestionChooseOne> {}
}
