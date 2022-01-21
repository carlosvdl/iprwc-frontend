import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {OrderComponent} from './components/order/order.component';
import {OrderPageComponent} from './pages/order-page/order-page.component';



@NgModule({
  declarations: [
    OrderComponent,
    OrderPageComponent
  ],
  imports: [
    SharedModule
  ]
})
export class OrderModule { }
