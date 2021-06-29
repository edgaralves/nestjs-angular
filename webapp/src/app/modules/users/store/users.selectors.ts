import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersFeatureKey, UsersState } from './users.reducers';

export const usersSelector = createFeatureSelector<UsersState>(usersFeatureKey);

export const selectUsers = createSelector(
  usersSelector,
  (state: UsersState) => state.users,
);
