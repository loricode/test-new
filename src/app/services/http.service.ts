import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string = environment.baseUrl

  constructor(private httpClient: HttpClient) { }

  public get(path:String):Observable<any>{
    return this.httpClient.get(this.baseUrl + path)
  }

}
