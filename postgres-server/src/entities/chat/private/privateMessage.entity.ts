import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/user.entity';

@Entity({ name: 'PrivateMessage' })
export class PrivateMessage {
  @PrimaryGeneratedColumn()
  message_id: number;

  @ManyToOne(() => User, (user) => user.private_messages_sender)
  @JoinColumn({
    name: 'sender_id',
    referencedColumnName: 'user_id',
  })
  sender_id: User;

  @ManyToOne(() => User, (user) => user.private_messages_receiver)
  @JoinColumn({
    name: 'receiver_id',
    referencedColumnName: 'user_id',
  })
  receiver_id: User;

  @Column()
  content: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  @Column({ default: false })
  read_status: boolean;
}
