import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  standalone: true,
})
export class ServerComponent implements OnInit {
  server!: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) { }

  // ngOnInit() {
  //   this.server = this.serversService.getServer(1);
  // }

  ngOnInit(){
    //We can use this method or the below method to dynamically load the component
    // We us e + here because, whatever parameters we pass here will be in string format. but id should be in the number format
    //To get the number format id we use + => It converts string to id
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params:Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    )
  }

}
