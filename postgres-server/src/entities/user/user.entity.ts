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
import { ChatGroup } from '../chat/group/chatGroup.entity';
import { UniSubject } from '../subjects/uniSubject.entity';
import { GroupMessage } from '../chat/group/groupMessage.entity';
import { PrivateMessage } from '../chat/private/privateMessage.entity';
import { ProfilePost } from './profilePost.entity';
import { SubjectPost } from '../subjects/subjectPost.entity';
import { ServerGroup } from '../userServer/serverGroup.entity';
import { ServerGroupPost } from '../userServer/serverGroupPost.entity';
import { Test } from '../test/test.entity';
import { TestScore } from '../test/testScore.entity';
import { AnswerOpenEnd } from '../test/answer/answerOpenEnd.entity';
import { AnswerChooseOne } from '../test/answer/answerChooseOne.entity';
import { AnswerBool } from '../test/answer/answerBool.entity';
import { SubjectPostComment } from '../subjects/subjectPostComment.entity';
import { ShopTransactions } from '../shop/shopTransactions.entity';

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

  @Column({ type: 'bytea', nullable: true })
  cover_file: Buffer;

  @Column({ type: 'bytea', nullable: true })
  profile_file: Buffer;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => ChatGroup, (chatgroup) => chatgroup.group_creator_id)
  group: ChatGroup[];

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

  @ManyToMany(() => ChatGroup, (chatgroup) => chatgroup.user)
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
  groups: ChatGroup[];

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

  // Many-to-many relationship for followers
  @ManyToMany(() => User, (user) => user.following)
  @JoinTable({
    name: 'UserFollowers',
    joinColumn: {
      name: 'follower_id',
      referencedColumnName: 'user_id',
    },
    inverseJoinColumn: {
      name: 'following_id',
      referencedColumnName: 'user_id',
    },
  })
  followers: User[];

  // Many-to-many relationship for following
  @ManyToMany(() => User, (user) => user.followers)
  following: User[];

  @OneToMany(() => ServerGroup, (serverGroup) => serverGroup.group_creator)
  server_group: ServerGroup[];

  @OneToMany(() => ServerGroupPost, (serverGroupPost) => serverGroupPost.user)
  server_group_post: ServerGroupPost[];

  @OneToMany(() => Test, (test) => test.user)
  test: Test[];

  @OneToMany(() => TestScore, (testScore) => testScore.user)
  testScore: TestScore[];

  @OneToMany(() => AnswerBool, (answer_bool) => answer_bool.user)
  answer_bool: AnswerBool[];

  @OneToMany(
    () => AnswerChooseOne,
    (answer_choose_one) => answer_choose_one.user,
  )
  answer_choose_one: AnswerChooseOne[];

  @OneToMany(() => AnswerOpenEnd, (answer_open_end) => answer_open_end.user)
  answer_open_end: AnswerOpenEnd[];

  @OneToMany(
    () => SubjectPostComment,
    (subjectPostComment) => subjectPostComment.user,
  )
  subject_post_comment: SubjectPostComment[];

  @OneToMany(() => ShopTransactions, (transactions) => transactions.user)
  transaction: ShopTransactions[];

  @Column()
  insight_coins: number;
}
