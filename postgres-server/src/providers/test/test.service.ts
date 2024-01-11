import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestDTO } from 'src/dto/test/test.dto';
import { Test } from 'src/entities/test/test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test) private testRepository: Repository<Test>,
  ) {}

  async createTest(testDto: TestDTO): Promise<Test> {
    return await this.testRepository.save({
      relations: ['test_type', 'user', 'subject'],
      title: testDto.title,
      description: testDto.description,
      start_time_date: testDto.start_time_date,
      end_time_date: testDto.end_time_date,
      time_duration: testDto.time_duration,
      where: {
        subject: {
          subject_id: testDto.subject_id,
        },
        user: {
          user_id: testDto.user_id,
        },
        test_type: {
          test_type_id: testDto.test_type_id,
        },
      },
    });
  }

  async getAllTestBySubject(subject_id: number): Promise<Test[]> {
    return await this.testRepository.find({
      relations: ['subject'],
      where: {
        subject: {
          subject_id: subject_id,
        },
      },
    });
  }
}
