import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../interfaces/users.interface';
import { removeUser } from '../../store/users.actions';
import { UsersState } from '../../store/users.reducers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() user!: User;

  constructor(private readonly store: Store<UsersState>) {}

  public removeUser(): void {
    this.store.dispatch(removeUser({ user: this.user }));
  }
}
