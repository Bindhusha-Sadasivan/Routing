import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedIn:boolean = false;

  constructor() { }

  // This method returns false after 800 ms. We didnt call login() or logout() anywhere in the code
  isAuthenticated(): any {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
              resolve(this.loggedIn);
          } , 800
        )
      }
    );
  }

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }
}
