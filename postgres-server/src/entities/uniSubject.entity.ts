import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('UniSubject')
export class UniSubject {
  @PrimaryGeneratedColumn()
  subject_id: number;

  @Column()
  subject_name: string;

  @Column()
  subject_category: string;

  @Column()
  subject_description: string;

  @ManyToMany(() => User)
  @JoinTable({ name: 'subjectMembers' })
  user: User[];
}
