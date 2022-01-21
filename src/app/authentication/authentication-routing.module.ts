import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NbLoginComponent, NbLogoutComponent, NbRegisterComponent} from '@nebular/auth';
import {IsNotAuthenticatedGuard} from './guards/is-not-authenticated.guard';
import {environment} from '../../environments/environment';
import {CustomNbAuthComponent} from './components/custom-nb-auth/custom-nb-auth.component';
import {IsAuthenticatedGuard} from './guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomNbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
        canActivate: [IsNotAuthenticatedGuard]
      },
      {
        path: environment.FrontEndRoutes.auth.login,
        component: NbLoginComponent,
        canActivate: [IsNotAuthenticatedGuard]
      },
      {
        path: environment.FrontEndRoutes.auth.register,
        component: NbRegisterComponent,
        canActivate: [IsNotAuthenticatedGuard],
      },
      {
        path: environment.FrontEndRoutes.auth.logout,
        component: NbLogoutComponent,
        canActivate: [IsAuthenticatedGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
