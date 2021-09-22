import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { mock } from 'jest-mock-extended';
import { User } from '../../interfaces/users.interface';
import { deleteUser } from '../../store/users.actions';
import { UsersState } from '../../store/users.reducers';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let store: MockStore<UsersState>;
  let fixture: ComponentFixture<UserComponent>;
  const user: User = mock<User>();
  user.name = 'Frontech';

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()],
    }).compileComponents(),
  );

  beforeEach(() => {
    store = TestBed.inject(MockStore) as MockStore<UsersState>;
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = user;

    fixture.detectChanges();
  });

  it('should display user information', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const userName = compiled.querySelector('.name')?.textContent;

    expect(userName).toEqual(user.name);
  });

  it('should dispatch the DeleteUser Action', () => {
    const spy = jest.spyOn(store, 'dispatch');
    component.removeUser();

    expect(spy).toHaveBeenCalledWith(deleteUser({ user }));
  });
});
