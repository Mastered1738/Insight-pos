import { Body, Controller, Post } from '@nestjs/common';
import { ProfilePostCommentService } from './profile-post-comment.service';
import { ProfilePostComment } from 'src/entities/profilePostComment.entity';
import { ProfilePostCommentDTO } from 'src/dto/profilePostComment/createProfilePostComment.dto';

@Controller('profile-post-comment')
export class ProfilePostCommentController {
  constructor(private readonly commentService: ProfilePostCommentService) {}

  @Post('/get-comments-byID')
  async getCommentsByID(
    @Body() post_id: number,
  ): Promise<ProfilePostComment[]> {
    return await this.commentService.getCommentsByPostID(post_id);
  }

  @Post('/create-comment')
  async createComment(
    @Body() commentDTO: ProfilePostCommentDTO,
  ): Promise<ProfilePostComment> {
    return await this.commentService.postAComment(commentDTO);
  }
}
