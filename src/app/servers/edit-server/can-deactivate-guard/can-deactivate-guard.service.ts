import { Injectable } from '@angular/core';
import { canDeactivateInterface } from './interface/can-deactivate-interface/can-deactivate-interface';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<canDeactivateInterface> {

  constructor() { }
  canDeactivate(
    component:canDeactivateInterface,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{ //nextState -> Where do you want to go next? It is optional
        //It deactivateds the component in which we are in currently. That component has to implement canDeactivate() method.
        return component.canDeactivate();
        //We need this connection in between the guard and the component.
  };
}
