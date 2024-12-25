import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ServerComponent } from './server/server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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

  constructor(
    private serversService: ServersService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReloadPage(){
    //This is to explain how relative URL is loaded programmatically.
    //This will show the same opened page.
    // {relativeTo:this.route} => this relativeTo comes from ActivatedRoute and this.route means the courrent route in which we are in. This is also comes from ActivetedRote
    //ActivatedRoute simply means that the currently loaded page
    //http://localhost:4200/servers
    this.router.navigate(['/servers'], {relativeTo:this.route});

    //ERROR RuntimeError: NG04002: Cannot match any routes. URL Segment: 'servers/servers'
    this.router.navigate(['servers'], {relativeTo:this.route});
  }

}
