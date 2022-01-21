import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductPageComponent} from './product/pages/product-page/product-page.component';
import {IsAuthenticatedGuard} from './authentication/guards/is-authenticated.guard';
import {ShoppingCartPageComponent} from './shopping-cart/pages/shopping-cart-page/shopping-cart-page.component';
import {ProfilePageComponent} from './user/pages/profile-page/profile-page.component';
import {ProductEditPageComponent} from './product/pages/product-edit-page/product-edit-page.component';
import {ProductResolver} from './product/resolvers/product.resolver';
import {AuthUserResolver} from './authentication/resolvers/auth-user.resolver';
import {environment} from '../environments/environment';
import {ShoppingCartResolver} from './shopping-cart/resolvers/shopping-cart.resolver';
import {IsAdminGuard} from './shared/guards/is-admin.guard';
import {OrderPageComponent} from './order/pages/order-page/order-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {
    path: environment.FrontEndRoutes.product,
    component: ProductPageComponent,
    canActivate: [IsAuthenticatedGuard],
    resolve: {products: ProductResolver}
  },
  {
    path: environment.FrontEndRoutes.shoppingCart,
    component: ShoppingCartPageComponent,
    canActivate: [IsAuthenticatedGuard],
    resolve: {shoppingCart: ShoppingCartResolver}
  },
  {
    path: environment.FrontEndRoutes.profile,
    component: ProfilePageComponent,
    canActivate: [IsAuthenticatedGuard],
    resolve: {user: AuthUserResolver}
  },
  {
    path: environment.FrontEndRoutes.productEdit,
    component: ProductEditPageComponent,
    canActivate: [IsAuthenticatedGuard, IsAdminGuard],
    resolve: {products: ProductResolver}
  },
  {
    path: environment.FrontEndRoutes.order,
    component: OrderPageComponent,
    canActivate: [IsAuthenticatedGuard],
    resolve: {shoppingCart: ShoppingCartResolver, user: AuthUserResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
