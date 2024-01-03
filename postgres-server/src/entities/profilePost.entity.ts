import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'ProfilePost' })
export class ProfilePost {
  @PrimaryGeneratedColumn()
  profile_post_id: number;

  @Column({ nullable: true })
  text: string;

  @Column({ nullable: true, type: 'bytea' })
  file: Buffer;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'user_id',
  })
  user_id: User;
}
