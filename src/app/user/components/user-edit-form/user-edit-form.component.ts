import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService,
              private toastrService: NbToastrService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
    this.userService.update(this.user).subscribe(
      response => {
        this.toastrService.success(`Successfully updated your user profile!`, '', { hasIcon: false });
      },
      error => {
        this.toastrService.danger('There is something wrong with the filled in data!', '', { hasIcon: false });
      }
    );
  }
}
