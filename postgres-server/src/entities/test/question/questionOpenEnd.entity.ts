import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Test } from '../test.entity';
import { AnswerOpenEnd } from '../answer/answerOpenEnd.entity';

@Entity({ name: 'QuestionOpenEnd' })
export class QuestionOpenEnd {
  @PrimaryGeneratedColumn()
  question_id: number;

  @Column()
  text: string;

  @Column()
  answer: string;

  @Column()
  point_value: number;

  @ManyToOne(() => Test, (test) => test.question_open_end)
  @JoinColumn({
    name: 'test_id',
    referencedColumnName: 'test_id',
  })
  test: Test;

  @OneToMany(() => AnswerOpenEnd, (answer_open_end) => answer_open_end.question)
  answer_open_end: AnswerOpenEnd[];
}
