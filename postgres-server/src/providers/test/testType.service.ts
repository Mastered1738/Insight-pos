import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestType } from 'src/entities/test/testType.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestTypeService {
  constructor(
    @InjectRepository(TestType)
    private testTypeRepository: Repository<TestType>,
  ) {}

  async getAllTestTypes(): Promise<TestType[]> {
    return await this.testTypeRepository.find();
  }
}
