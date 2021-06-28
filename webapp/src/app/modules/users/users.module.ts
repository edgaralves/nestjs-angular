import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { MainComponent } from './pages/main/main.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [MainComponent, UserComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
