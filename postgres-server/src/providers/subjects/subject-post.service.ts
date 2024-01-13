import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectPostDTO } from 'src/dto/subjects/SubjectPost.dto';
import { SubjectPost } from 'src/entities/subjects/subjectPost.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectPostService {
  constructor(
    @InjectRepository(SubjectPost)
    private subjectPostRepository: Repository<SubjectPost>,
  ) {}

  async createSubjectPost(
    subjectPostDTO: SubjectPostDTO,
  ): Promise<SubjectPost> {
    return await this.subjectPostRepository.save({
      title: subjectPostDTO.title,
      text: subjectPostDTO.text,
      file: subjectPostDTO.file,
      user_id: subjectPostDTO.post_creator_id,
    });
  }

  async getAllSubjectPosts(subject_id: number): Promise<SubjectPost[]> {
    return await this.subjectPostRepository.find({
      relations: ['subject'],
      where: {
        subject: {
          subject_id: subject_id,
        },
      },
    });
  }
}
