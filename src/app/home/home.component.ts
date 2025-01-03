import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../authService/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router,
    private authService:AuthServiceService

  ) { }

  ngOnInit() {
  }

  // Using Absolute URL
  loadServers(){
    //Complex calculation to save something into servers. After finishing these calculations load the below page
    //Using Absolute URL
    this.router.navigate(['/servers']);  //http://localhost:4200/servers
  }

  loadServersById(id:number){
    this.router.navigate(['/servers', id, 'edit'], {queryParams:{allowEdit:'true'}, fragment:'loading'});
  }

  onLogin(){
    return this.authService.login();
  }

  onLogout(){
    return this.authService.logout();
  }
}
