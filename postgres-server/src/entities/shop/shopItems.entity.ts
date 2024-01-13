import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ShopTransactions } from './shopTransactions.entity';

@Entity({ name: 'ShopItems' })
export class ShopItems {
  @PrimaryGeneratedColumn()
  item_id: number;

  @Column()
  item_name: string;

  @Column()
  item_description: string;

  @Column()
  number_available: number;

  @Column()
  real_money_cost: number;

  @Column()
  insight_coins_cost: number;

  @OneToMany(() => ShopTransactions, (transactions) => transactions.item)
  transaction: ShopTransactions[];
}
