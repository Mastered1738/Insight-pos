import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { typeOrmConfig } from 'config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectModule } from './uniSubject/subject.module';
import { ChatGroupModule } from './chat-group/ChatGroup.module';
import { GroupMessageModule } from './group-message/group-message.module';
import { SubjectPostModule } from './subject-post/subject-post.module';
import { ProfilePostModule } from './profile-post/profile-post.module';
import { PrivateMessageModule } from './private-message/private-message.module';
import { ProfilePostCommentService } from './profile-post-comment/profile-post-comment.service';
import { ProfilePostCommentController } from './profile-post-comment/profile-post-comment.controller';
import { ProfilePostCommentModule } from './profile-post-comment/profile-post-comment.module';

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
  controllers: [ProfilePostCommentController],
  providers: [ProfilePostCommentService],
})
export class AppModule {}
