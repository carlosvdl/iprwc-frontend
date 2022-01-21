import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCart} from '../../models/shopping-cart';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {Product} from '../../../product/models/product';
import {ShoppingCartProduct} from '../../models/shopping-cart-product';
import {NbToastrService} from '@nebular/theme';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @Input() shoppingCart: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService,
              private toastrService: NbToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  calculateTotalPrice(): number {
    let sum: number = 0;
    this.shoppingCart.products.forEach(product => sum += product.price);

    return sum;
  }

  deleteProductFromShoppingCart(product: Product): void {
    const shoppingCartProduct = new ShoppingCartProduct(product.id);

    this.shoppingCartService.deleteProduct(shoppingCartProduct).subscribe(
      response => {
        this.toastrService.success(`Successfully removed ${product.title} from the shopping cart!`, '', { hasIcon: false });
        this.shoppingCart.products = this.shoppingCart.products.filter(p => p !== product)
      },
      error => {
        this.toastrService.danger(error.error.message[0], '', { hasIcon: false });
      }
    );
  }

  emptyShoppingCart(): void {

    this.shoppingCartService.empty().subscribe(
      response => {
        this.toastrService.success(`Successfully emptied the shopping cart!`, '', { hasIcon: false });
        this.shoppingCart.products = [];
      },
      error => {
        this.toastrService.danger(error.error.message[0], '', { hasIcon: false });
      }
    );
  }

  routeToOrderPage(): void {
    this.router.navigateByUrl('/order');
  }
}
