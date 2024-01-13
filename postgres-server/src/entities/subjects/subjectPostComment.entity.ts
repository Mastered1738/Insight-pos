import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { SubjectPost } from './subjectPost.entity';

@Entity({ name: 'SubjectPostComment' })
export class SubjectPostComment {
  @PrimaryGeneratedColumn()
  comment_id: number;

  @Column()
  text: string;

  @ManyToOne(() => User, (user) => user.subject_post_comment)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'user_id',
  })
  user: User;

  @ManyToOne(
    () => SubjectPost,
    (subjectPost) => subjectPost.subject_post_comment,
  )
  @JoinColumn({
    name: 'subject_post_id',
    referencedColumnName: 'subject_post_id',
  })
  subjectPost: SubjectPost;
}
