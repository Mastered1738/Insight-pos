import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopTransactionsController } from 'src/controllers/shop/shopTransactions.controller';
import { ShopTransactions } from 'src/entities/shop/shopTransactions.entity';
import { User } from 'src/entities/user/user.entity';
import { ShopTransactionsService } from 'src/providers/shop/shopTransactions.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShopTransactions, User])],
  controllers: [ShopTransactionsController],
  providers: [ShopTransactionsService],
  exports: [ShopTransactionsService],
})
export class ShopTransactionsModule {}
