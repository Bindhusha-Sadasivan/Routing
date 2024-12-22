import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ServerComponent } from './server/server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  standalone: true,
  imports:[RouterModule, CommonModule, ServerComponent, EditServerComponent],
   providers:[ServersService],
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
