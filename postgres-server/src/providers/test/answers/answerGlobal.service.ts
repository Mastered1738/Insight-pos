import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AllTestAnswers } from 'src/dto/test/answers/allAnswers.dto';
import { AnswerBool } from 'src/entities/test/answer/answerBool.entity';
import { AnswerChooseOne } from 'src/entities/test/answer/answerChooseOne.entity';
import { AnswerOpenEnd } from 'src/entities/test/answer/answerOpenEnd.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GlobalAnswerService {
  constructor(
    @InjectRepository(AnswerBool)
    private questionBoolRepo: Repository<AnswerBool>,
    @InjectRepository(AnswerChooseOne)
    private questionChooseOneRepo: Repository<AnswerChooseOne>,
    @InjectRepository(AnswerOpenEnd)
    private questionOpenEndRepo: Repository<AnswerOpenEnd>,
  ) {}

  async getAllAnswersByTestAndUser(
    user_id: number,
    test_id: number,
  ): Promise<AllTestAnswers> {
    const boolAnswers = await this.questionBoolRepo.find({
      relations: ['user', 'question'],
      where: {
        user: {
          user_id: user_id,
        },
        question: {
          test: {
            test_id: test_id,
          },
        },
      },
    });
    const chooseOneAnswers = await this.questionChooseOneRepo.find({
      relations: ['user', 'question'],
      where: {
        user: {
          user_id: user_id,
        },
        question: {
          test: {
            test_id: test_id,
          },
        },
      },
    });
    const openEndAnswers = await this.questionOpenEndRepo.find({
      relations: ['user', 'question'],
      where: {
        user: {
          user_id: user_id,
        },
        question: {
          test: {
            test_id: test_id,
          },
        },
      },
    });

    const allTestQuestions: AllTestAnswers = {
      boolAnswers: boolAnswers,
      chooseOneAnswers: chooseOneAnswers,
      openEndAnswers: openEndAnswers,
    };

    return await allTestQuestions;
  }
}
