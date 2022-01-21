import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShoppingCart} from '../../../shopping-cart/models/shopping-cart';
import {User} from '../../../user/models/user';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  shoppingCart: ShoppingCart;
  user: User;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.shoppingCart = this.route.snapshot.data.shoppingCart;
    this.user = this.route.snapshot.data.user;
  }

}
