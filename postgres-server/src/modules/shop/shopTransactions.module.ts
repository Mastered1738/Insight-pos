import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopTransactionsController } from 'src/controllers/shop/shopTransactions.controller';
import { ShopTransactions } from 'src/entities/shop/shopTransactions.entity';
import { ShopTransactionsService } from 'src/providers/shop/shopTransactions.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShopTransactions])],
  controllers: [ShopTransactionsController],
  providers: [ShopTransactionsService],
  exports: [ShopTransactionsService],
})
export class ShopTransactionsModule {}
