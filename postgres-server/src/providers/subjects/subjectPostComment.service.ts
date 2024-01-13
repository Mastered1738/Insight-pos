import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectPostCommentDTO } from 'src/dto/subjects/SubjectPostComment.dto';
import { SubjectPostComment } from 'src/entities/subjects/subjectPostComment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectPostCommentService {
  constructor(
    @InjectRepository(SubjectPostComment)
    private commentRepository: Repository<SubjectPostComment>,
  ) {}

  async createSubjectPostComment(
    commentDTO: SubjectPostCommentDTO,
  ): Promise<SubjectPostComment> {
    return await this.commentRepository.save({
      text: commentDTO.text,
      user_id: commentDTO.user_id,
      subject_post_id: commentDTO.subject_post_id,
    });
  }

  async getAllCommentsForSubjectPost(
    post_id: number,
  ): Promise<SubjectPostComment[]> {
    return await this.commentRepository.find({
      relations: ['subjectPost'],
      where: {
        subjectPost: {
          subject_post_id: post_id,
        },
      },
    });
  }
}
