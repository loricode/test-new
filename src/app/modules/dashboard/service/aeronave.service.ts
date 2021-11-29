import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class AeronaveService {

  constructor( private http: HttpService ) { }

  public getAeronaves(): Observable<any> {
    return this.http.get('/db.json')
  }


}
