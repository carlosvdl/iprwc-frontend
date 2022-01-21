import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShoppingCart} from '../../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.css']
})
export class ShoppingCartPageComponent implements OnInit {

  shoppingCart: ShoppingCart;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.shoppingCart = this.route.snapshot.data.shoppingCart;
  }

}
