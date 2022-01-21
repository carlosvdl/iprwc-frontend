import {ProductInterface} from '../interfaces/product-interface';

export class Product implements ProductInterface {

  constructor(
    public title: string,
    public description: string,
    public image_url: string,
    public price: number,
    public id?: string,
    public created_at?: Date,
    public updated_at?: Date
  ) {}
}
