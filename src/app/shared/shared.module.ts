import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbIconModule, NbInputModule,
  NbListModule,
  NbThemeModule,
  NbToastrModule
} from '@nebular/theme';
import {JwtModule} from '@auth0/angular-jwt';
import {TableModule} from 'ngx-easy-table';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    BrowserAnimationsModule,
    NbCardModule,
    NbListModule,
    NbActionsModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:  () => localStorage.getItem('auth_app_token')
      }
    }),
    TableModule

  ],
  exports: [
    NavigationComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbCardModule,
    NbListModule,
    NbActionsModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    TableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    NavigationComponent
  ]
})
export class SharedModule { }
