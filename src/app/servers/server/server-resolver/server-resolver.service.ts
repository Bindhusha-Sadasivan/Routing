import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { ServersService } from '../../servers.service';

interface Server{
  id:number,
  name:string,
  status:string
}

@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server> {

  constructor(private serverService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    return this.serverService.getServer(+route.params['id'])

  }
}
