import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { typeOrmConfig } from 'config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectModule } from './modules/subjects/subject.module';
import { ChatGroupModule } from './modules/chat/group/ChatGroup.module';
import { GroupMessageModule } from './modules/chat/group/group-message.module';
import { SubjectPostModule } from './modules/subjects/subject-post.module';
import { ProfilePostModule } from './modules/user/profile-post.module';
import { PrivateMessageModule } from './modules/chat/private/private-message.module';
import { ProfilePostCommentModule } from './modules/user/profile-post-comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    SubjectModule,
    ChatGroupModule,
    GroupMessageModule,
    SubjectPostModule,
    ProfilePostModule,
    PrivateMessageModule,
    ProfilePostCommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
