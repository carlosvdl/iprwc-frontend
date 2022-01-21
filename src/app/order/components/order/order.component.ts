import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCart} from '../../../shopping-cart/models/shopping-cart';
import {User} from '../../../user/models/user';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() shoppingCart: ShoppingCart;
  @Input() user: User;

  constructor() { }

  calculateTotalPrice(): number {
    let sum: number = 0;
    this.shoppingCart.products.forEach(product => sum += product.price);

    return sum;
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
