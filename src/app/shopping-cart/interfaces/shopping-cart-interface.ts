import {Product} from '../../product/models/product';

export interface ShoppingCartInterface {
  id?: string;
  user_id?: string;
  products?: Product[];
  created_at?: Date;
  updated_at?: Date;
}
