import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { ServerGroupPost } from './serverGroupPost.entity';

@Entity({ name: 'ServerGroup' })
export class ServerGroup {
  @PrimaryGeneratedColumn()
  server_group_id: number;

  @Column()
  group_name: string;

  @ManyToOne(() => User, (user) => user.server_group)
  @JoinColumn({
    name: 'group_creator_id',
    referencedColumnName: 'user_id',
  })
  group_creator: User;

  @OneToMany(
    () => ServerGroupPost,
    (serverGroupPost) => serverGroupPost.server_group,
  )
  server_group_post: ServerGroupPost[];
}
