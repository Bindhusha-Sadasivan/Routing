import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent implements OnInit {

  message!:string;

  constructor(
    private route: ActivatedRoute
  ) {}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  //Static change
  // const message = this.route.snapshot.data['message']
  // this.message = message;

  //subscribe to the ActivatedRoute t, if data changes happens in the future or to handle change detection

  this.route.data.subscribe(
    (data:Data) => {
      this.message = data['message'];
    }

  )
}

}
