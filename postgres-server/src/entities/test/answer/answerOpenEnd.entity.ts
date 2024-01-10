import { User } from 'src/entities/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { QuestionOpenEnd } from '../question/questionOpenEnd.entity';

@Entity({ name: 'AnswerOpenEnd' })
export class AnswerOpenEnd {
  @PrimaryGeneratedColumn()
  answer_id: number;

  @Column()
  given_answer: string;

  @Column()
  points: number;

  @ManyToOne(
    () => QuestionOpenEnd,
    (questionOpenEnd) => questionOpenEnd.answer_open_end,
  )
  @JoinColumn({
    name: 'question_id',
    referencedColumnName: 'question_id',
  })
  question: QuestionOpenEnd;

  @ManyToOne(() => User, (user) => user.answer_open_end)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'user_id',
  })
  user: User;
}
