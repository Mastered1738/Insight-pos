import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShopItems } from './shopItems.entity';
import { User } from '../user/user.entity';

@Entity({ name: 'ShopTransactions' })
export class ShopTransactions {
  @ManyToOne(() => User, (user) => user.transaction)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'user_id',
  })
  user: User;

  @ManyToOne(() => ShopItems, (shopItems) => shopItems.transaction)
  @JoinColumn({
    name: 'item_id',
    referencedColumnName: 'item_id',
  })
  item: ShopItems;

  @Column()
  item_quantity: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  bought_at_time: Date;

  @Column({ nullable: true })
  total_real_money_cost: number;

  @Column({ nullable: true })
  total_insight_coins_cost: number;

  @PrimaryGeneratedColumn()
  transaction_id: number;
}
