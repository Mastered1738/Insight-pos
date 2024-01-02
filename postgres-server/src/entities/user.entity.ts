import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserType } from './userType.entity';
import { Group } from './group.entity';
import { UniSubject } from './uniSubject.entity';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(() => UserType)
  @JoinColumn({
    name: 'user_type',
    referencedColumnName: 'user_type_id',
  })
  user_type: UserType;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Group, (group) => group.group_creator_id)
  group: Group[];

  @ManyToMany(() => UniSubject)
  @JoinTable({ name: 'subjectMembers' })
  uniSubject: UniSubject[];

  @ManyToMany(() => Group)
  @JoinTable({ name: 'groupMembers' })
  groupMembers: Group[];
}
