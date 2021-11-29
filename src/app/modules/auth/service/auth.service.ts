import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpService) { }

  public getCredentials( obj: any ):Observable<any>{
    return this.http.get('/credential.json').pipe(
      map( resp => {

        if(resp.credentials.password === obj.password){
          localStorage.setItem('token', JSON.stringify(resp.credentials))
        }

        return resp.credentials.password === obj.password
      })
    );
  }
}
