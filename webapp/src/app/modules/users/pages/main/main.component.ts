import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/users.interface';
import { UsersService } from '../../store/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  public users$: Observable<User[]>;

  constructor(private readonly userService: UsersService) {
    this.users$ = userService.entities$;
  }

  ngOnInit(): void {
    this.userService.getAll();
  }
}
