import {UserInterface} from '../interfaces/user-interface';
import {ShoppingCart} from '../../shopping-cart/models/shopping-cart';

export class User implements UserInterface {

  constructor(
    public email?: string,
    public password?: string,
    public full_name?: string,
    public shoppingCart?: ShoppingCart,
    public phone_number?: string,
    public country?: string,
    public state?: string,
    public zip_code?: string,
    public city?: string,
    public street?: string,
    public house_number?: number,
    public house_number_suffix?: string,
    public id?: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}
}
