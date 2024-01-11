import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestScoreDTO } from 'src/dto/test/testScore.dto';
import { TestScore } from 'src/entities/test/testScore.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestScoreService {
  constructor(
    @InjectRepository(TestScore)
    private testScoreRepository: Repository<TestScore>,
  ) {}

  async createTestScore(testScoreDto: TestScoreDTO): Promise<TestScore> {
    return await this.testScoreRepository.save({
      relations: ['test', 'user'],
      score_gotten: testScoreDto.score_gotten,
      insight_coins_gotten: testScoreDto.insight_coins_gotten,
      where: {
        test: {
          test_id: testScoreDto.test_id,
        },
        user: {
          user_id: testScoreDto.user_id,
        },
      },
    });
  }

  async getTestScoreByTestAndUser(
    test_id: number,
    user_id: number,
  ): Promise<TestScore> {
    return await this.testScoreRepository.findOne({
      relations: ['test', 'user'],
      where: {
        test: {
          test_id: test_id,
        },
        user: {
          user_id: user_id,
        },
      },
    });
  }
}
