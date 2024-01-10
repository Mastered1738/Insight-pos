import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { UniSubject } from './uniSubject.entity';

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

  @ManyToOne(() => UniSubject, (subject) => subject.subject_post_comment)
  @JoinColumn({
    name: 'subject_id',
    referencedColumnName: 'subject_id',
  })
  subject: UniSubject;
}
