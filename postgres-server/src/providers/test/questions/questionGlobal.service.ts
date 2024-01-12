import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AllTestQuestions } from 'src/dto/test/allQuestions.dto';
import { QuestionBool } from 'src/entities/test/question/questionBool.entity';
import { QuestionChooseOne } from 'src/entities/test/question/questionChooseOne.entity';
import { QuestionOpenEnd } from 'src/entities/test/question/questionOpenEnd.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GlobalQuestionService {
  constructor(
    @InjectRepository(QuestionBool)
    private questionBoolRepo: Repository<QuestionBool>,
    @InjectRepository(QuestionChooseOne)
    private questionChooseOneRepo: Repository<QuestionChooseOne>,
    @InjectRepository(QuestionOpenEnd)
    private questionOpenEndRepo: Repository<QuestionOpenEnd>,
  ) {}

  async getAllQuestionsByTest(test_id: number): Promise<AllTestQuestions> {
    const boolQuestions = await this.questionBoolRepo.find({
      relations: ['test'],
      where: {
        test: {
          test_id: test_id,
        },
      },
    });
    const chooseOneQuestions = await this.questionChooseOneRepo.find({
      relations: ['test'],
      where: {
        test: {
          test_id: test_id,
        },
      },
    });
    const openEndQuestions = await this.questionOpenEndRepo.find({
      relations: ['test'],
      where: {
        test: {
          test_id: test_id,
        },
      },
    });

    const allTestQuestions: AllTestQuestions = {
      boolQuestions: boolQuestions,
      chooseOneQuestions: chooseOneQuestions,
      openEndQuestions: openEndQuestions,
    };

    return await allTestQuestions;
  }
}
