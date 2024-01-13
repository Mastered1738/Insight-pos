import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { SubjectPostComment } from './subjectPostComment.entity';
import { UniSubject } from './uniSubject.entity';

@Entity({ name: 'SubjectPost' })
export class SubjectPost {
  @PrimaryGeneratedColumn()
  subject_post_id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column({ nullable: true, type: 'bytea' })
  file: Buffer;

  @ManyToOne(() => UniSubject, (subject) => subject.subjectPost)
  @JoinColumn({
    name: 'subject_id',
    referencedColumnName: 'subject_id',
  })
  subject: UniSubject;

  @OneToMany(
    () => SubjectPostComment,
    (subjectPostComment) => subjectPostComment.subjectPost,
  )
  subject_post_comment: SubjectPostComment[];

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'post_creator_id',
    referencedColumnName: 'user_id',
  })
  post_creator_id: User;
}
