import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'Group' })
export class Group {
  @PrimaryGeneratedColumn()
  group_id: number;

  @Column()
  group_name: string;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'group_creator_id',
    referencedColumnName: 'user_id',
  })
  group_creator_id: User;

  @ManyToMany(() => User)
  @JoinTable({ name: 'groupMembers' })
  user: User[];
}
