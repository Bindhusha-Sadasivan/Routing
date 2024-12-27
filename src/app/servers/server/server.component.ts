import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // ngOnInit() {
  //   this.server = this.serversService.getServer(1);
  // }

  ngOnInit(){
    //We can use this method or the below method to dynamically load the component
    // We us e + here because, whatever parameters we pass here will be in string format. but id should be in the number format
    //To get the number format id we use + => It converts string to id
    // If you are providing resolver we dont require this block of code. Make changes in the appRoutes
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params:Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );
    //After commenting the above code, add the below lines

    this.route.data.subscribe(
      (data:Data) => {
        this.server = data['server']
      }
    )
  }

  //  If we dint pass this parameter - queryParamsHandling:'preserve', then we will loose the query params
  //  We will get like http://localhost:4200/servers/1/edit , we didnt get the query params passed from the serversComponent.
  // To preserve that only, we are using queryParamsHandling:'preserve' => http://localhost:4200/servers/3/edit?allowEdit=1
// queryParamsHandling has 3 properties, merge, replace and preserve - we will look this later
  onEdit(){
    this.router.navigate(["edit"], {relativeTo:this.route, queryParamsHandling:'preserve'} )
  }
}
