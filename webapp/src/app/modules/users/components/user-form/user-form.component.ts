import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../../interfaces/users.interface';
import { createUser } from '../../store/users.actions';
import { UsersState } from '../../store/users.reducers';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  public userForm: FormGroup;

  constructor(private readonly store: Store<UsersState>) {
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
      this.store.dispatch(createUser({ user }));
    }
  }
}
