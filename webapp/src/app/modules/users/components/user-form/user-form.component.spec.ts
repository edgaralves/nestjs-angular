import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { User } from '../../interfaces/users.interface';
import { createUser } from '../../store/users.actions';
import { UsersState } from '../../store/users.reducers';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let store: MockStore<UsersState>;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents(),
  );

  beforeEach(() => {
    store = TestBed.inject(MockStore) as MockStore<UsersState>;
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
  });

  it('should do nothing if form is invalid', () => {
    const spy = jest.spyOn(store, 'dispatch');

    expect(component.userForm.invalid).toBeTruthy();
    component.addUser();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should add a new User', () => {
    const spy = jest.spyOn(store, 'dispatch');

    const user: Partial<User> = {
      name: 'User Test',
      profession: 'Backend Developer',
    };

    component.userForm.controls.name.setValue(user.name);
    component.userForm.controls.profession.setValue(user.profession);

    expect(component.userForm.invalid).toBeFalsy();

    component.addUser();

    expect(spy).toHaveBeenCalledWith(createUser({ user }));
  });
});
