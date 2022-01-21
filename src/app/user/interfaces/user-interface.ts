import {ShoppingCart} from '../../shopping-cart/models/shopping-cart';

export interface UserInterface {
  id?: string;
  email?: string;
  password?: string;
  full_name?: string;
  shopping_cart?: ShoppingCart;
  phone_number?: string;
  country?: string;
  state?: string;
  zip_code?: string;
  city?: string;
  street?: string;
  house_number?: number;
  house_number_suffix?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
