import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionBool } from 'src/entities/test/question/questionBool.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionBoolService {
  constructor(
    @InjectRepository(QuestionBool)
    private questionRepository: Repository<QuestionBool>,
  ) {}

  //async createQuestion(): Promise<QuestionBool> {}
}
