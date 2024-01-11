import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestScoreController } from 'src/controllers/test/testScore.controller';
import { TestScore } from 'src/entities/test/testScore.entity';
import { TestScoreService } from 'src/providers/test/testScore.service';

@Module({
  imports: [TypeOrmModule.forFeature([TestScore])],
  controllers: [TestScoreController],
  providers: [TestScoreService],
  exports: [TestScoreService],
})
export class TestScoreModule {}
