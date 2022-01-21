import { NgModule } from '@angular/core';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {SharedModule} from '../shared/shared.module';
import {NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import {environment} from '../../environments/environment';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import { CustomNbAuthComponent } from './components/custom-nb-auth/custom-nb-auth.component';
import {NbCardModule} from '@nebular/theme';



@NgModule({
  imports: [
    AuthenticationRoutingModule,
    SharedModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: environment.APIEndpoint,
          login: {
            method: 'post',
            endpoint: environment.APIRoutes.auth.login,
            redirect: {
              success: environment.FrontEndRoutes.product,
              failure: environment.FrontEndRoutes.auth.login
            }
          },
          register: {
            method: 'post',
            endpoint: environment.APIRoutes.auth.register,
            redirect: {
              success: environment.FrontEndRoutes.product,
              failure: environment.FrontEndRoutes.auth.register
            }
          },
          logout: {
            method: 'post',
            endpoint: environment.APIRoutes.auth.logout,
            redirect: {
              success: environment.FrontEndRoutes.auth.login,
              failure: environment.FrontEndRoutes.product
            }
          },
          token: {
            class: NbAuthJWTToken,
            key: 'token'
          }
        })
      ],
      forms: {
        login: {
          redirectDelay: 0,
          rememberMe: false
        },
        register: {
          redirectDelay: 0,
          terms: false,
          fullName: false
        },
        logout: {
          redirectDelay: 0
        },
        validation: {
          password: {
            required: true,
            minLength: 8,
            maxLength: 32,
          },
          email: {
            required: true,
          },
          fullName: {
            required: true,
            minLength: 5,
            maxLength: 32,
          }
        }
      }
    }),
    NbCardModule
  ],
  exports: [
    NbEvaIconsModule,
    NbAuthModule
  ],
  declarations: [
    CustomNbAuthComponent
  ]
})
export class AuthenticationModule { }
