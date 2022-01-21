import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-post-form',
  templateUrl: './product-post-form.component.html',
  styleUrls: ['./product-post-form.component.css']
})
export class ProductPostFormComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
              private toastrService: NbToastrService,
              protected dialogRef: NbDialogRef<ProductPostFormComponent>,
              private router: Router) { }

  ngOnInit(): void {
    this.product = new Product('', '', '', 0);
  }

  close(): void {
    this.dialogRef.close();
  }

  postProduct(): void {
    this.productService.post(this.product).subscribe(
      response => {
        this.close();
        this.router.navigateByUrl('/products');
        this.toastrService.success(`Added ${this.product.title} successfully to the store!`, '', { hasIcon: false });
      },
      error => {
        this.toastrService.danger('There went something wrong with adding the product!', '', { hasIcon: false });
      }
    );
  }
}
