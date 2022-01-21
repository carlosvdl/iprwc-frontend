import { NgModule } from '@angular/core';
import {ProductOverviewComponent} from './components/product-overview/product-overview.component';
import {SharedModule} from '../shared/shared.module';
import {ProductPageComponent} from './pages/product-page/product-page.component';
import {ProductEditPageComponent} from './pages/product-edit-page/product-edit-page.component';
import {ProductEditFormComponent} from './components/product-edit-form/product-edit-form.component';
import {ProductEditOverviewComponent} from './components/product-edit-overview/product-edit-overview.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductPostFormComponent } from './components/product-post-form/product-post-form.component';



@NgModule({
  declarations: [
    ProductOverviewComponent,
    ProductEditFormComponent,
    ProductEditOverviewComponent,
    ProductPageComponent,
    ProductEditPageComponent,
    ProductDetailComponent,
    ProductPostFormComponent
  ],
  imports: [
    SharedModule
  ],

})
export class ProductModule { }
