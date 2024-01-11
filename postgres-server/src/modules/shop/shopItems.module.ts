import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopItemsController } from 'src/controllers/shop/shopItems.controller';
import { ShopItems } from 'src/entities/shop/shopItems.entity';
import { ShopItemsService } from 'src/providers/shop/shopItems.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShopItems])],
  controllers: [ShopItemsController],
  providers: [ShopItemsService],
  exports: [ShopItemsService],
})
export class ShopItemsModule {}
