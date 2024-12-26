import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true,
  imports:[RouterModule]
})
export class UserComponent implements OnInit, OnDestroy {
  user!: {id: number, name: string};

  paramsSubscription! : Subscription;

  constructor(private route:ActivatedRoute) { }

  // We are passing the parameters through url and passing this to our page => path: 'users/:id/:name'.
  //When i pass like this http://localhost:4200/users/1/Max => it will display is and respective name in the html like below
  //User with ID _1_ loaded.
  //User name is _Max_
  // this.route.snapshot.params['id'] => will store the id passed in the url
  //We didnt perform any click function right now.
  //When you type the URL,http://localhost:4200/users/1/Max, we will get the output.

  ngOnInit() {
    // This is required for initial load and initial changes.
    this.user = {
      id : this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name']
    };

    //The below two methods are required for often changes in the URL
    //Whenever the route params changes, everything will be stored in Params Object. And we need a subscribe method to listen to the change in the route parameters.
    //This shows how we can update our page when we are already on that page.
    // this.route.params.subscribe(
    //   (params:Params) => {
    //     this.user.id = params['id'],
    //     this.user.name = params['name']
    //   }
    // );

    this.paramsSubscription = this.route.params.subscribe(
      (params:Params) => {
        this.user.id = params['id'],
        this.user.name = params['name']
      }
  )
}

ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
this.paramsSubscription.unsubscribe();
}
}
