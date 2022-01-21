import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NbLayoutModule} from '@nebular/theme';
import {SharedModule} from './shared/shared.module';
import {UserModule} from './user/user.module';
import {ProductModule} from './product/product.module';
import {ShoppingCartModule} from './shopping-cart/shopping-cart.module';
import {NbTokenLocalStorage, NbTokenStorage} from '@nebular/auth';
import {AuthInterceptor} from './authentication/interceptors/auth.interceptor';
import { OrderComponent } from './order/components/order/order.component';
import { OrderPageComponent } from './order/pages/order-page/order-page.component';
import {OrderModule} from './order/order.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NbLayoutModule,
    SharedModule,
    UserModule,
    ProductModule,
    ShoppingCartModule,
    OrderModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: NbTokenStorage, useClass: NbTokenLocalStorage},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
