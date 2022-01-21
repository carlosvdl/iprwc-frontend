import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NbAuthJWTToken, NbAuthService, NbAuthToken} from '@nebular/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean;
  authSubscription: Subscription;

  constructor(private nbAuthService: NbAuthService) {
    this.isAuthenticated = false;
    this.authSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.listenIfAuthenticated();
  }

  ngOnDestroy(): void {
  }

  listenIfAuthenticated(): void {
    this.authSubscription = this.nbAuthService.onTokenChange()
      .subscribe( token => {
        this.isAuthenticated = this.checkIfAuthenticated(token);
      });
  }

  checkIfAuthenticated(token: NbAuthToken): boolean {
    return token instanceof  NbAuthJWTToken && token.isValid();
  }


}
