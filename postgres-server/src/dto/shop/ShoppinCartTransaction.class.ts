import { CartItem } from './CartItem.dto';

export class ShoppingCartTransaction {
  buyer_id: number;
  bought_items: CartItem[];
}
