import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {NbDialogService} from '@nebular/theme';
import {ProductDetailComponent} from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  open(product: Product) {
    this.dialogService.open(ProductDetailComponent, {
      context: {
        product: product
      }
    });
  }
}
