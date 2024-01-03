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
import { GroupMessage } from './groupMessage.entity';
import { PrivateMessage } from './privateMessage.entity';
import { ProfilePost } from './profilePost.entity';
import { SubjectPost } from './SubjectPost.entity';

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

  @ManyToMany(() => UniSubject, (uniSubject) => uniSubject.students)
  @JoinTable({
    name: 'SubjectMembers', // table name for the junction table of this relation
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'user_id',
    },
    inverseJoinColumn: {
      name: 'subject_id',
      referencedColumnName: 'subject_id',
    },
  })
  uniSubject: UniSubject[];

  @ManyToMany(() => Group, (group) => group.user)
  @JoinTable({
    name: 'GroupMembers',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'user_id',
    },
    inverseJoinColumn: {
      name: 'group_id',
      referencedColumnName: 'group_id',
    },
  })
  groups: Group[];

  @OneToMany(() => GroupMessage, (groupMessage) => groupMessage.sender_id)
  group_messages: GroupMessage[];

  @OneToMany(() => PrivateMessage, (privateMessage) => privateMessage.sender_id)
  private_messages_sender: PrivateMessage[];

  @OneToMany(
    () => PrivateMessage,
    (privateMessage) => privateMessage.receiver_id,
  )
  private_messages_receiver: PrivateMessage[];

  @OneToMany(() => ProfilePost, (profilePost) => profilePost.user_id)
  profilePost: ProfilePost[];

  @OneToMany(() => SubjectPost, (subjectPost) => subjectPost.post_creator_id)
  subjectPost: SubjectPost[];
}
