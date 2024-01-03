import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { GroupMessage } from './groupMessage.entity';

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

  @ManyToMany(() => User, (user) => user.groups)
  user: User[];

  @OneToMany(() => GroupMessage, (groupMessage) => groupMessage.group_id)
  group_messages: GroupMessage[];
}
