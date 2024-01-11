import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionChooseOneController } from 'src/controllers/test/questions/questionChooseOne.controller';
import { QuestionChooseOne } from 'src/entities/test/question/questionChooseOne.entity';
import { QuestionChooseOneService } from 'src/providers/test/questions/questionChooseOne.service';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionChooseOne])],
  controllers: [QuestionChooseOneController],
  providers: [QuestionChooseOneService],
  exports: [QuestionChooseOneService],
})
export class QuestionChooseOneModule {}
