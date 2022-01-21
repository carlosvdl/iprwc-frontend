import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-edit-form',
  templateUrl: './product-edit-form.component.html',
  styleUrls: ['./product-edit-form.component.css']
})
export class ProductEditFormComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
              private toastrService: NbToastrService,
              protected dialogRef: NbDialogRef<ProductEditFormComponent>,
              private router: Router) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(
      response => {
        this.close();
        this.router.navigateByUrl('/products');
        this.toastrService.success(`Updated ${this.product.title} successfully!`, '', { hasIcon: false });
      },
      error => {
        this.toastrService.danger(error.error.image_url, '', { hasIcon: false });
      }
    );
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(
      response => {
        this.close();
        this.router.navigateByUrl('/products');
        this.toastrService.success(`Deleted ${this.product.title} successfully from the store!`, '', { hasIcon: false });
      },
        error => {
        this.toastrService.danger('There went something wrong with deleting the product!', '', { hasIcon: false });
      }
    );
  }

}
