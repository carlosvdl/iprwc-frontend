import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ShoppingCartService} from '../../../shopping-cart/services/shopping-cart.service';
import {ShoppingCartProduct} from '../../../shopping-cart/models/shopping-cart-product';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {NbDialogRef, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private shoppingCartService: ShoppingCartService,
              private toastrService: NbToastrService,
              private router: Router,
              protected dialogRef: NbDialogRef<ProductDetailComponent>) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  addProductToShoppingCart(): void {
    const shoppingCartProduct = new ShoppingCartProduct(this.product.id);

    this.shoppingCartService.addProduct(shoppingCartProduct).subscribe(
      response => {
        this.close();
        this.toastrService.success(`Added ${this.product.title} successfully to the shopping cart!`, '', { hasIcon: false });
        this.router.navigateByUrl(environment.FrontEndRoutes.shoppingCart);
      },
      error => {
        this.toastrService.danger(error.error.message[0], '', { hasIcon: false });
      }
    );
  }
}
