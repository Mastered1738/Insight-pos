import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ServerGroup } from './serverGroup.entity';
import { User } from '../user/user.entity';

@Entity({ name: 'ServerGroupPost' })
export class ServerGroupPost {
  @PrimaryGeneratedColumn()
  message_id: number;

  @ManyToOne(() => ServerGroup, (serverGroup) => serverGroup.server_group_post)
  @JoinColumn({
    name: 'server_group_id',
    referencedColumnName: 'server_group_id',
  })
  server_group: ServerGroup;

  @ManyToOne(() => User, (user) => user.server_group_post)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'user_id',
  })
  user: User;

  @Column()
  content: string;

  @Column({ type: 'timestamp' })
  timestamp: Date;
}
