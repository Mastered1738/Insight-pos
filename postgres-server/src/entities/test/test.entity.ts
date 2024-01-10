import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UniSubject } from '../subjects/uniSubject.entity';
import { User } from '../user/user.entity';
import { TestType } from './testType.entity';
import { TestScore } from './testScore.entity';
import { QuestionOpenEnd } from './question/questionOpenEnd.entity';
import { QuestionBool } from './question/questionBool.entity';
import { QuestionChooseOne } from './question/questionChooseOne.entity';

@Entity({ name: 'Test' })
export class Test {
  @PrimaryGeneratedColumn()
  test_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'timestamp' })
  start_time_date: Date;

  @Column({ type: 'timestamp' })
  end_time_date: Date;

  @Column({ type: 'interval' })
  time_duration: Date;

  @ManyToOne(() => UniSubject, (uniSubject) => uniSubject.test)
  @JoinColumn({
    name: 'subject_id',
    referencedColumnName: 'subject_id',
  })
  subject: UniSubject;

  @ManyToOne(() => User, (user) => user.server_group)
  @JoinColumn({
    name: 'test_creator_id',
    referencedColumnName: 'user_id',
  })
  user: User;

  @ManyToOne(() => TestType, (testType) => testType.test)
  @JoinColumn({
    name: 'test_type_id',
    referencedColumnName: 'test_type_id',
  })
  test_type: TestType;

  @OneToMany(() => TestScore, (testScore) => testScore.test)
  testScore: TestScore[];

  @OneToMany(() => QuestionOpenEnd, (questionOpenEnd) => questionOpenEnd.test)
  question_open_end: QuestionOpenEnd[];

  @OneToMany(() => QuestionBool, (questionBool) => questionBool.test)
  question_bool: QuestionBool[];

  @OneToMany(
    () => QuestionChooseOne,
    (questionChooseOne) => questionChooseOne.test,
  )
  question_choose_one: QuestionChooseOne[];
}
