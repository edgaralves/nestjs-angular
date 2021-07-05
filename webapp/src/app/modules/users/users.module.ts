import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appIcons } from 'src/app/svg/app';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './components/user/user.component';
import { MainComponent } from './pages/main/main.component';
import { UserEffects } from './store/users.effects';
import { usersFeatureKey, usersReducer } from './store/users.reducers';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [MainComponent, UserComponent, UserFormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UserEffects]),
    SvgIconsModule.forChild(appIcons),
  ],
})
export class UsersModule {}
