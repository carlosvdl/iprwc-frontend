import {ShoppingCartInterface} from '../interfaces/shopping-cart-interface';
import {Product} from '../../product/models/product';

export class ShoppingCart implements ShoppingCartInterface {

  constructor(
    public id: string,
    public user_id: string,
    public products: Product[],
    public created_at: Date,
    public updated_at: Date
  ) {}
}
