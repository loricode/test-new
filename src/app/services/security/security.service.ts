import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  public verifyUser():Observable<boolean>{
    if(localStorage.getItem("userData") === null){
      console.log(localStorage.getItem("userData"))
      return of(true);
  }
  return of(false);
}


}
