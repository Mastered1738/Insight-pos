import { User } from 'src/entities/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { QuestionChooseOne } from '../question/questionChooseOne.entity';

@Entity({ name: 'AnswerChooseOne' })
export class AnswerChooseOne {
  @PrimaryGeneratedColumn()
  answer_id: number;

  @Column()
  given_answer: string;

  @Column()
  points: number;

  @ManyToOne(
    () => QuestionChooseOne,
    (questionChooseOne) => questionChooseOne.answer_choose_one,
  )
  @JoinColumn({
    name: 'question_id',
    referencedColumnName: 'question_id',
  })
  question: QuestionChooseOne;

  @ManyToOne(() => User, (user) => user.answer_choose_one)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'user_id',
  })
  user: User;
}
