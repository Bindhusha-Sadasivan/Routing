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
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './servers/server/server-resolver/server-resolver.service';

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
    // canActivate: [AuthGuard],
    canActivateChild:[AuthGuard], // Guards the child routes

    children:[
      {
        path:':id/edit',
        component: EditServerComponent,
        canDeactivate:[CanDeactivateGuard]
      },
      {
        path: ':id',
        component: ServerComponent,
        resolve: {server:ServerResolverService}
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
  // {
  //   path: 'not-found',
  //   component: PageNotFoundComponent
  // },
  //Passing static data with routing
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data:{message: "This page is not found!!!"} //This data is what we want to pass it from route to .ts file and then to html template
  },
  //If we type any other route, it has to be re-directed to the wild card route.
  {
    path: '**',
    redirectTo: '/not-found'
  }
];
