import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { canDeactivateInterface } from './can-deactivate-guard/interface/can-deactivate-interface/can-deactivate-interface';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
  standalone: true,
  imports:[FormsModule, RouterModule, CommonModule]
})
export class EditServerComponent implements OnInit, canDeactivateInterface {
  server!: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    console.log("queryParams",this.route.snapshot.queryParams);
    console.log("fragments", this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams:Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    // this.server = this.serversService.getServer(1); //This will always edit the first server
    const id = +this.route.snapshot.params['id'] //We are passing the current route id here.
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true; // Now the changes were saved. The server updated successfully.
    //Now the user wants to leave the page or go one step up, we need ActivatedRoute to get ythe current route status and navigating one step back from the current route
    this.router.navigate(['../'], {relativeTo:this.route} );
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit){
      return true;
    }

    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status)&&(!this.changesSaved)){
      return confirm('Do you want to discard the cahnges?')
    }

    else{
      return true;
    }
  }

}
