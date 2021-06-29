import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../interfaces/users.interface';
import { setUsers } from './users.actions';

export interface UsersState {
  users: User[];
}

export const initialUsersState: UsersState = {
  users: Array<User>(),
};

export const usersFeatureKey = 'users';

const usersReducerBase = createReducer(
  initialUsersState,
  on(setUsers, (state, { users }) => ({ ...state, users })),
);

export function usersReducer(state: UsersState, action: Action): UsersState {
  return usersReducerBase(state, action);
}
