import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from '../../authService/auth-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private router: Router,
    // private route: ActivatedRouteSnapshot,
    // private state: RouterStateSnapshot,
    private authService: AuthServiceService
  ) { }

  // It always returns a boolean
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>{

    const authenticated:any = await this.authService.isAuthenticated(); // this line gets the result of isAuthenticated from authService - It is assigned to be false.
    if(authenticated){
      return true;
    }
    else {
      this.router.navigate(['/']);
        return false;
    }
  }
}
