import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_id_DTO } from 'src/dto/user/user_id.dto';
import { ProfilePost } from 'src/entities/user/profilePost.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilePostService {
  constructor(
    @InjectRepository(ProfilePost)
    private profilePostRepository: Repository<ProfilePost>,
  ) {}

  async createProfilePost(
    user_id: number,
    text?: string,
    file?: Buffer,
  ): Promise<ProfilePost> {
    return await this.profilePostRepository.save({
      relations: ['user_id'],
      text: text,
      file: file,
      where: {
        user_id: {
          user_id: user_id,
        },
      },
    });
  }

  async getProfilePostsByUser(user_id: user_id_DTO): Promise<ProfilePost[]> {
    return await this.profilePostRepository.find({
      relations: ['user_id'],
      where: {
        user_id: {
          user_id: user_id.user_id,
        },
      },
    });
  }
}
