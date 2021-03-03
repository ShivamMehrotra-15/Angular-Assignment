import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { UsersRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [CreateUserComponent, ViewAllUsersComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UsersRoutingModule],
  exports: [CreateUserComponent, ViewAllUsersComponent],
  providers: [UserService],
})
export class UsersModule {}
