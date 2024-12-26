import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent },
  {
    path:'users',
    component: UsersComponent
  },
  //Whatever we pass after our url => http://localhost:4200/users/hello or http://localhost:4200/users/hello, it will load UserComponent
  // We should add : here. Then only it considers that as a parameter
  {
    path: 'users/:id/:name',
    component: UserComponent
  },
  {
    path: 'servers',
    component: ServersComponent
  },
  //To learn about queryPrameters and fragments
  {
    path: 'servers/:id/edit',
    component: EditServerComponent
  }
];
