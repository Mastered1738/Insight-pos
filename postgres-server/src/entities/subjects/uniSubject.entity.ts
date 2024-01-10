import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Test } from '../test/test.entity';
import { SubjectPostComment } from './subjectPostComment.entity';
import { Event } from 'src/entities/event/event.entity';

@Entity({ name: 'UniSubject' })
export class UniSubject {
  @PrimaryGeneratedColumn()
  subject_id: number;

  @Column()
  subject_name: string;

  @Column()
  subject_category: string;

  @Column({ nullable: true })
  subject_description: string;

  @ManyToMany(() => User, (user) => user.uniSubject)
  students: User[];

  @OneToMany(() => Test, (test) => test.subject)
  test: Test[];

  @OneToMany(
    () => SubjectPostComment,
    (subjectPostComment) => subjectPostComment.subject,
  )
  subject_post_comment: SubjectPostComment[];

  @OneToMany(() => Event, (event) => event.subject)
  event: Event[];
}
