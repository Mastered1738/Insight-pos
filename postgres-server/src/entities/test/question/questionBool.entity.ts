import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Test } from '../test.entity';
import { AnswerBool } from '../answer/answerBool.entity';

@Entity({ name: 'QuestionBool' })
export class QuestionBool {
  @PrimaryGeneratedColumn()
  question_id: number;

  @Column()
  text: string;

  @Column()
  answer: boolean;

  @Column()
  point_value: number;

  @ManyToOne(() => Test, (test) => test.question_bool)
  @JoinColumn({
    name: 'test_id',
    referencedColumnName: 'test_id',
  })
  test: Test;

  @OneToMany(() => AnswerBool, (answer_bool) => answer_bool.question)
  answer_bool: AnswerBool[];
}
