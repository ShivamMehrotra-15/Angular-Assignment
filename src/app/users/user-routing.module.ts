import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users/create',
    pathMatch: 'full',
  },
  {
    path: 'users/view',
    component: ViewAllUsersComponent,
  },
  {
    path: 'users/create',
    component: CreateUserComponent,
  },
];
const path: any = routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
