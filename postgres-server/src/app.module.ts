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
import { EventModule } from './modules/event/event.module';
import { ShopItemsModule } from './modules/shop/shopItems.module';
import { ShopTransactionsModule } from './modules/shop/shopTransactions.module';
import { AnswerBoolModule } from './modules/test/answers/answerBool.module';
import { AnswerOpenEndModule } from './modules/test/answers/answerOpenEnd.module';
import { AnswerChooseOneModule } from './modules/test/answers/answerChooseOne.module';
import { QuestionOpenEndModule } from './modules/test/questions/questionOpenEnd.module';
import { QuestionBoolModule } from './modules/test/questions/questionBool.module';
import { QuestionChooseOneModule } from './modules/test/questions/questionChooseOne.module';
import { SubjectPostCommentModule } from './modules/subjects/subjectPostComment.module';
import { TestModule } from './modules/test/test.module';
import { TestTypeModule } from './modules/test/testType.module';
import { TestScoreModule } from './modules/test/testScore.module';
import { ServerGroupModule } from './modules/userServer/serverGroup.module';
import { ServerGroupPostModule } from './modules/userServer/serverGroupPost.module';

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
    EventModule,
    ShopItemsModule,
    ShopTransactionsModule,
    AnswerBoolModule,
    AnswerOpenEndModule,
    AnswerChooseOneModule,
    QuestionBoolModule,
    QuestionOpenEndModule,
    QuestionChooseOneModule,
    SubjectPostCommentModule,
    TestModule,
    TestTypeModule,
    TestScoreModule,
    ServerGroupModule,
    ServerGroupPostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
