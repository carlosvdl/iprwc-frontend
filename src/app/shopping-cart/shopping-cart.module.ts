import { NgModule } from '@angular/core';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {ShoppingCartPageComponent} from './pages/shopping-cart-page/shopping-cart-page.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingCartPageComponent
  ],
  imports: [
    SharedModule

  ]
})
export class ShoppingCartModule { }
