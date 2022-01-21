import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {ProductService} from '../services/product.service';
import {ProductInterface} from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductInterface[]> {

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInterface[]> {
    return this.productService.getAll();
  }
}
