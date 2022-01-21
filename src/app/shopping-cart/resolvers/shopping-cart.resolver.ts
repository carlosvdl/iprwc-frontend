import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {ShoppingCartInterface} from '../interfaces/shopping-cart-interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartResolver implements Resolve<ShoppingCartInterface> {

  constructor(private shoppingCartService: ShoppingCartService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ShoppingCartInterface> {
    return this.shoppingCartService.get();
  }
}
