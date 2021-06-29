import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/users.interface';
import { getUsers } from '../../store/users.actions';
import { UsersState } from '../../store/users.reducers';
import { selectUsers } from '../../store/users.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  public users$: Observable<User[]> = this.store.select(selectUsers);

  constructor(private readonly store: Store<UsersState>) {}

  ngOnInit(): void {
    this.store.dispatch(getUsers());
  }
}
