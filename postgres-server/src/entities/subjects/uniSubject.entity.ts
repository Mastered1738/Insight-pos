import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Test } from '../test/test.entity';
import { Event } from 'src/entities/event/event.entity';
import { SubjectPost } from './subjectPost.entity';

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

  @OneToMany(() => Event, (event) => event.subject)
  event: Event[];

  @OneToMany(() => SubjectPost, (subjectPost) => subjectPost.subject)
  subjectPost: SubjectPost[];
}
