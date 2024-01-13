import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShopItemsDTO } from 'src/dto/shop/ShopItems.dto';
import { ShopItems } from 'src/entities/shop/shopItems.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShopItemsService {
  constructor(
    @InjectRepository(ShopItems) private itemRepository: Repository<ShopItems>,
  ) {}

  async createShopItem(shopitemsdto: ShopItemsDTO): Promise<ShopItems> {
    return await this.itemRepository.save({
      item_name: shopitemsdto.item_name,
      item_description: shopitemsdto.item_description,
      number_available: shopitemsdto.number_available,
      real_money_cost: shopitemsdto.real_money_cost,
      insight_coins_cost: shopitemsdto.insight_coins_cost,
    });
  }

  async getAllShopItems(): Promise<ShopItems[]> {
    return await this.itemRepository.find();
  }
}
