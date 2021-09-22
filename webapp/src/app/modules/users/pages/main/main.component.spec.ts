import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getUsers } from '../../store/users.actions';
import { UsersState } from '../../store/users.reducers';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let store: MockStore<UsersState>;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()],
    }).compileComponents(),
  );

  beforeEach(() => {
    store = TestBed.inject(MockStore) as MockStore<UsersState>;
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
  });

  it('should dispatch the GetUsers Action', () => {
    const spy = jest.spyOn(store, 'dispatch');
    component.ngOnInit();

    expect(spy).toHaveBeenCalledWith(getUsers());
  });
});
