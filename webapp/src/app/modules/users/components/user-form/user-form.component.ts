import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { User } from '../../interfaces/users.interface';
import { UsersService } from '../../store/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  public userForm: FormGroup;

  constructor(private readonly userService: UsersService) {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      profession: new FormControl('', Validators.required),
    });
  }

  public addUser(): void {
    if (!this.userForm.invalid) {
      const user: Partial<User> = {
        name: this.userForm.get('name')?.value,
        profession: this.userForm.get('profession')?.value,
      };
      this.userService
        .add(user, { isOptimistic: false })
        .pipe(take(1))
        .subscribe(() => this.userService.getAll());
    }
  }
}
