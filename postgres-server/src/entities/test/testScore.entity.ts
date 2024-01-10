import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Test } from './test.entity';

@Entity({ name: 'TestScore' })
export class TestScore {
  @PrimaryGeneratedColumn()
  test_score_id: number;

  @Column()
  score_gotten: number;

  @Column()
  insight_coins_gotten: number;

  @ManyToOne(() => User, (user) => user.testScore)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'user_id',
  })
  user: User;

  @ManyToOne(() => Test, (test) => test.testScore)
  @JoinColumn({
    name: 'test_id',
    referencedColumnName: 'test_id',
  })
  test: Test;
}
