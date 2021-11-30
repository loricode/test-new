import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';


export interface CredentialResponse {
  credentials: Credential[];
}

export interface Credential {
  email:    string;
  password: string;
  role:     string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpService) { }

  public getCredentials( obj: any ):Observable<boolean>{
     let foundUser = false;
    return this.http.get('/credential.json').pipe(
      map( ( resp:CredentialResponse ) => {

     const found = resp.credentials.find((item:any) => {
         return (item.password === obj.password && item.email === obj.email)
       })

       if(found){
        localStorage.setItem('token', JSON.stringify(found))
        foundUser = true
      }

        return foundUser
      })
    );
  }
}
