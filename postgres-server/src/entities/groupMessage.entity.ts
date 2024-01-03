import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from './group.entity';
import { User } from './user.entity';

@Entity({ name: 'GroupMessage' })
export class GroupMessage {
  @ManyToOne(() => Group, (group) => group.group_messages)
  @JoinColumn({
    name: 'group_id',
    referencedColumnName: 'group_id',
  })
  group_id: Group;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'sender_id',
    referencedColumnName: 'user_id',
  })
  sender_id: User;

  @Column()
  content: string;

  @Column()
  timestamp: Date;

  @PrimaryGeneratedColumn()
  message_id: number;
}
