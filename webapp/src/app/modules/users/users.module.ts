import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './components/user/user.component';
import { MainComponent } from './pages/main/main.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [MainComponent, UserComponent, UserFormComponent],
  imports: [CommonModule, UsersRoutingModule, FormsModule, ReactiveFormsModule],
})
export class UsersModule {}
