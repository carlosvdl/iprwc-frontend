import { Injectable } from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ShoppingCartInterface} from '../interfaces/shopping-cart-interface';
import {HttpResponse} from '@angular/common/http';
import {ShoppingCartProduct} from '../models/shopping-cart-product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private apiService: ApiService) { }

  get(): Observable<ShoppingCartInterface> {
    return this.apiService.get<ShoppingCartInterface>(environment.APIRoutes.shoppingCart.get);
  }

  addProduct(product: ShoppingCartProduct): Observable<HttpResponse<any>> {
    return this.apiService.put(environment.APIRoutes.shoppingCart.addProduct, product);
  }

  deleteProduct(product: ShoppingCartProduct): Observable<HttpResponse<any>> {
    return this.apiService.put(environment.APIRoutes.shoppingCart.deleteProduct, product);
  }

  empty(): Observable<HttpResponse<any>> {
    return this.apiService.put(environment.APIRoutes.shoppingCart.empty, 0);
  }
}
