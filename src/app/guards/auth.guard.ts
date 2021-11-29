import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SecurityService } from '../services/security/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

 constructor(
   private securityService: SecurityService,
   private router: Router
  ){ }

  canActivate():Observable<boolean> | boolean {
    const token = localStorage.getItem('token') || ''

    if(token === ''){
      this.router.navigateByUrl('auth')
       return false // no deja pasar a dashboard
     }
    return true;

  }

  canLoad(): boolean {
     return true;

  }
}
