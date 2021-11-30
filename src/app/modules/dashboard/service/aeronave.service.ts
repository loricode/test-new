import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class AeronaveService {

  listNave = []

  constructor( private http: HttpService ) { }

  public getAeronaves(): Observable<any> {
    return this.http.get('/db.json').pipe(
      tap( resp => this.listNave = resp.aeronaves
      )
    )
  }


}
