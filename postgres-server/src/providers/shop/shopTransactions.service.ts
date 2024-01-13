import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShoppingCartTransaction } from 'src/dto/shop/ShoppinCartTransaction.class';
import { ShopTransactions } from 'src/entities/shop/shopTransactions.entity';
import { User } from 'src/entities/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShopTransactionsService {
  constructor(
    @InjectRepository(ShopTransactions)
    private transactionRepository: Repository<ShopTransactions>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createTransaction(
    shoppingCart: ShoppingCartTransaction,
  ): Promise<string> {
    const user: User = await this.userRepository.findOne({
      where: {
        user_id: shoppingCart.buyer_id,
      },
    });

    shoppingCart.bought_items.forEach((bought_item) => {
      user.insight_coins -= bought_item.insight_coins_cost;
      this.userRepository.update(
        {
          insight_coins: user.insight_coins,
        },
        user,
      );
      this.transactionRepository.save({
        user_id: shoppingCart.buyer_id,
        item_id: bought_item.item_id,
        item_quantity: bought_item.number_of_items,
        total_insight_coins_cost: bought_item.insight_coins_cost,
        total_real_money_cost: bought_item.real_money_cost,
      });
    });

    return 'Transaction made!';
  }

  async getPreviousTransactions(): Promise<ShopTransactions[]> {
    return this.transactionRepository.find({
      order: {
        bought_at_time: 'DESC',
      },
      take: 10,
    });
  }
}
