import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Test } from '../test.entity';
import { AnswerChooseOne } from '../answer/answerChooseOne.entity';

@Entity({ name: 'QuestionChooseOne' })
export class QuestionChooseOne {
  @PrimaryGeneratedColumn()
  question_id: number;

  @Column()
  text: string;

  @Column()
  option_a: string;

  @Column()
  option_b: string;

  @Column({ nullable: true })
  option_c: string;

  @Column({ nullable: true })
  option_d: string;

  @Column({ nullable: true })
  option_e: string;

  @Column({ nullable: true })
  option_f: string;

  @Column()
  answer: string;

  @Column()
  point_value: number;

  @ManyToOne(() => Test, (test) => test.question_choose_one)
  @JoinColumn({
    name: 'test_id',
    referencedColumnName: 'test_id',
  })
  test: Test;

  @OneToMany(
    () => AnswerChooseOne,
    (answer_choose_one) => answer_choose_one.question,
  )
  answer_choose_one: AnswerChooseOne[];
}
