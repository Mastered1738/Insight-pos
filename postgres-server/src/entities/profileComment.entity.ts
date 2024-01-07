import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProfilePost } from './profilePost.entity';

@Entity({ name: 'ProfilePostComment' })
export class ProfilePostComment {
  @PrimaryGeneratedColumn()
  comment_id: number;

  @Column()
  text: string;

  @ManyToOne(
    () => ProfilePost,
    (profilePost) => profilePost.profile_post_comment,
  )
  @JoinColumn({
    name: 'post_id',
    referencedColumnName: 'post_id',
  })
  profile_post: ProfilePost;
}
