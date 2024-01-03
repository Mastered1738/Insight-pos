import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectPost } from 'src/entities/subjectPost.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectPostService {
  constructor(
    @InjectRepository(SubjectPost)
    private subjectPostRepository: Repository<SubjectPost>,
  ) {}
}
