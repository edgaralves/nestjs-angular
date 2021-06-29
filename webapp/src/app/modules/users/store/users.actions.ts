import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/users.interface';

export const addUser = createAction(
  '[Users] Add User',
  props<{ user: Partial<User> }>(),
);
export const getUsers = createAction('[Users] Get All');
export const setUsers = createAction(
  '[Users] Set Users',
  props<{ users: User[] }>(),
);
export const removeUser = createAction(
  '[Users] Remove',
  props<{ user: User }>(),
);
