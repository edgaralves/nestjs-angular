import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/users.interface';
import * as UserActions from './users.actions';

@Injectable()
export class UserEffects {
  constructor(
    private readonly http: HttpClient,
    private readonly action$: Actions,
  ) {}

  getUsers$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.getUsers),
      switchMap(() => this.http.get<User[]>(`${environment.apiUrl}/users`)),
      switchMap((users: User[]) =>
        of(
          UserActions.setUsers({
            users,
          }),
        ),
      ),
    ),
  );

  createUser$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.createUser),
      switchMap((action) => this.http.post<User>(`${environment.apiUrl}/users`, action.user)),
      switchMap(() => of(UserActions.getUsers())),
    ),
  );

  deleteUser$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.deleteUser),
      switchMap((action) =>
        this.http.delete(
          `${environment.apiUrl}/users/${action.user.id}`,
        )),
      switchMap(() => of(UserActions.getUsers())),
    ),
  );
}
