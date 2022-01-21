import { NgModule } from '@angular/core';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {UserEditFormComponent} from './components/user-edit-form/user-edit-form.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    UserEditFormComponent,
    ProfilePageComponent
  ],
    imports: [
        SharedModule
    ]
})
export class UserModule { }
