import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true
})
export class UserComponent implements OnInit {
  user!: {id: number, name: string};

  constructor(private route:ActivatedRoute) { }

  // We are passing the parameters through url and passing this to our page => path: 'users/:id/:name'.
  //When i pass like this http://localhost:4200/users/1/Max => it will display is and respective name in the html like below
  //User with ID _1_ loaded.
  //User name is _Max_
  // this.route.snapshot.params['id'] => will store the id passed in the url
  //We didnt perform any click function right now.
  //When you type the URL,http://localhost:4200/users/1/Max, we will get the output.

  ngOnInit() {
    this.user = {
      id : this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name']
    };
  }

}
