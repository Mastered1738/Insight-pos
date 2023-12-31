import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserType extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_type_id: number;

  @Column()
  userType_name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => User, (user) => user.user_type)
  user: User[];
}
