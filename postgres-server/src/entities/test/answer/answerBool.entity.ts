import { User } from 'src/entities/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { QuestionBool } from '../question/questionBool.entity';

@Entity({ name: 'AnswerBool' })
export class AnswerBool {
  @PrimaryGeneratedColumn()
  answer_id: number;

  @Column()
  given_answer: boolean;

  @Column()
  points: number;

  @ManyToOne(() => QuestionBool, (questionBool) => questionBool.answer_bool)
  @JoinColumn({
    name: 'question_id',
    referencedColumnName: 'question_id',
  })
  question: QuestionBool;

  @ManyToOne(() => User, (user) => user.answer_bool)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'user_id',
  })
  user: User;
}
