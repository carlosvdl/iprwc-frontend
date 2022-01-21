import { Injectable } from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {NbTokenStorage} from '@nebular/auth';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {UserInterface} from '../../user/interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private api: ApiService, private tokenService: NbTokenStorage) {
  }

  fetchAuthUser(): Observable<UserInterface> {
    return this.api.get(environment.APIRoutes.auth.user);
  }

  getLocalUser(): any {
    return this.tokenService.get().getPayload();
  }
}
