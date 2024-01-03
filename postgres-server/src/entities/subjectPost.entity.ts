import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'SubjectPost' })
export class SubjectPost {
  @PrimaryGeneratedColumn()
  subject_post_id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column({ nullable: true, type: 'bytea' })
  file: Buffer;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'post_creator_id',
    referencedColumnName: 'user_id',
  })
  post_creator_id: User;
}
