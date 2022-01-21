import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ApiService} from '../../shared/services/api.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  update(user: User): Observable<HttpResponse<any>> {
    return this.apiService.put(environment.APIRoutes.user.put, user);
  }
}
