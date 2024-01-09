import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChatGroup } from './chatGroup.entity';
import { User } from '../../user/user.entity';

@Entity({ name: 'GroupMessage' })
export class GroupMessage {
  @ManyToOne(() => ChatGroup, (chatgroup) => chatgroup.group_messages)
  @JoinColumn({
    name: 'group_id',
    referencedColumnName: 'group_id',
  })
  group_id: ChatGroup;

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
