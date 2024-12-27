import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { Component } from '@angular/core';
import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/authGuard/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent },
  {
    path:'users',
    component: UsersComponent,

    children:[
      {
        path: ':id/:name',
        component: UserComponent
      }
    ]
  },
  //Whatever we pass after our url => http://localhost:4200/users/hello or http://localhost:4200/users/hello, it will load UserComponent
  // We should add : here. Then only it considers that as a parameter
  // {
  //   path: 'users/:id/:name',
  //   component: UserComponent
  // },
  {
    path: 'servers',
    component: ServersComponent,
    canActivate: [AuthGuard],

    children:[
      {
        path:':id/edit',
        component: EditServerComponent
      },
      {
        path: ':id',
        component: ServerComponent
      }
    ]
  },
  //To learn about queryPrameters and fragments
  // {
  //   path: 'servers/:id/edit',
  //   component: EditServerComponent
  // },
  // {
  //   path: 'servers/:id',
  //   component: ServerComponent
  // },
  //When we click on any other unwanted page, it should leads to this component.
  // This is called wild card route
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  //If we type any other route, it has to be re-directed to the wild card route.
  {
    path: '**',
    redirectTo: '/not-found'
  }
];
