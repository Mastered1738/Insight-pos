import { Body, Controller, Post } from '@nestjs/common';
import { ProfilePostCommentService } from '../../providers/user/profile-post-comment.service';
import { ProfilePostComment } from 'src/entities/user/profilePostComment.entity';
import { ProfilePostCommentDTO } from 'src/dto/profilePostComment/createProfilePostComment.dto';
import { GetCommentsByIDDTO } from 'src/dto/profilePostComment/getCommentsByID.dto';

@Controller('/profile-post-comment')
export class ProfilePostCommentController {
  constructor(private readonly commentService: ProfilePostCommentService) {}

  @Post('/get-comments-byID')
  async getCommentsByID(
    @Body() getCommentsDTO: GetCommentsByIDDTO,
  ): Promise<ProfilePostComment[]> {
    return await this.commentService.getCommentsByPostID(getCommentsDTO);
  }

  @Post('/create-comment')
  async createComment(
    @Body() commentDTO: ProfilePostCommentDTO,
  ): Promise<ProfilePostComment> {
    return await this.commentService.postAComment(commentDTO);
  }
}
