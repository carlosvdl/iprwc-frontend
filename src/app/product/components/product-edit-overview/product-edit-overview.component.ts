import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {Columns, Config, DefaultConfig} from 'ngx-easy-table';
import {NbDialogService} from '@nebular/theme';
import {ProductEditFormComponent} from '../product-edit-form/product-edit-form.component';
import {ProductPostFormComponent} from '../product-post-form/product-post-form.component';

@Component({
  selector: 'app-product-edit-overview',
  templateUrl: './product-edit-overview.component.html',
  styleUrls: ['./product-edit-overview.component.css']
})
export class ProductEditOverviewComponent implements OnInit {

  @Input() products: Product[] = [];
  configuration: Config;
  columns: Columns[];

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.columns = [
      { key: 'id', title: 'ID' },
      { key: 'title', title: 'Title' },
      { key: 'description', title: 'Description' },
      { key: 'image_url', title: 'Image URL' },
      { key: 'price', title: 'Price' },
      { key: 'created_at', title: 'Created at'},
      { key: 'updated_at', title: 'Updated at'}
    ];
  }

  eventEmitted($event: { event: string; value: any }): void {
    const clickedProductId = JSON.stringify($event.value.row.id);
    const product: Product = this.products.find(product => product.id == clickedProductId);

    this.open(product);
  }

  open(product: Product): void {
    this.dialogService.open(ProductEditFormComponent, {
      context: {
        product: product
      }
    });
  }

  openPostProductForm(): void {
    this.dialogService.open(ProductPostFormComponent);
  }
}
