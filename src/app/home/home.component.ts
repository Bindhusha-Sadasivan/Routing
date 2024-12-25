import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  loadServers(){
    //Complex calculation to save something into servers. After finishing these calculations load the below page

    this.route.navigate(['/servers']);
  }

}
