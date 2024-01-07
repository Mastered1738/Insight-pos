import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfilePostCommentDTO } from 'src/dto/profilePostComment/createProfilePostComment.dto';
import { ProfilePostComment } from 'src/entities/profilePostComment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilePostCommentService {
  constructor(
    @InjectRepository(ProfilePostComment)
    private readonly profilePostCommentRepository: Repository<ProfilePostComment>,
  ) {}

  async postAComment(
    commentDTO: ProfilePostCommentDTO,
  ): Promise<ProfilePostComment> {
    return await this.profilePostCommentRepository.save(commentDTO);
  }

  async getCommentsByPostID(post_id: number): Promise<ProfilePostComment[]> {
    return await this.profilePostCommentRepository.find({
      relations: ['profile_post'],
      where: {
        profile_post: {
          profile_post_id: post_id,
        },
      },
      order: {
        created_at: 'DESC',
      },
    });
  }
}
