import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/users.interface';

export const createUser = createAction(
  '[Users] Create User',
  props<{ user: Partial<User> }>(),
);
export const getUsers = createAction('[Users] Get All');
export const setUsers = createAction(
  '[Users] Set Users',
  props<{ users: User[] }>(),
);
export const deleteUser = createAction(
  '[Users] Delete User',
  props<{ user: User }>(),
);
