import { Injectable } from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {environment} from '../../../environments/environment';
import {HttpResponse} from '@angular/common/http';
import {ProductInterface} from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<ProductInterface[]> {
    return this.apiService.get<ProductInterface[]>(environment.APIRoutes.product.getAll);
  }

  get(productId: string): Observable<ProductInterface[]> {
    return this.apiService.get<ProductInterface[]>(environment.APIRoutes.product.get + productId);
  }

  post(product: Product): Observable<HttpResponse<any>> {
    return this.apiService.post(environment.APIRoutes.product.post, product);
  }

  update(product: Product): Observable<HttpResponse<any>> {
    return this.apiService.put(environment.APIRoutes.product.put + product.id, product);
  }

  delete(productId: string): Observable<HttpResponse<any>> {
    return this.apiService.delete(environment.APIRoutes.product.delete + productId);
  }
}
