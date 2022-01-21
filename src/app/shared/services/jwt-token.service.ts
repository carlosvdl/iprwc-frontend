import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  constructor(private jwtHelperService: JwtHelperService) { }

  isAdmin(): boolean {
    const token = this.jwtHelperService.tokenGetter();
    const decodedToken = this.jwtHelperService.decodeToken(token);

    return decodedToken.is_admin;
  }
}
