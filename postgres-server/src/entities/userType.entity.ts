import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'UserType' })
export class UserType extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_type_id: number;

  @Column()
  user_type_name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => User, (user) => user.user_type)
  user: User[];
}
