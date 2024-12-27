import { Observable } from "rxjs";

export interface canDeactivateInterface{
  // This is a method which doesn't take any inputs and finally returna an observable/promise/boolean type output
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}
