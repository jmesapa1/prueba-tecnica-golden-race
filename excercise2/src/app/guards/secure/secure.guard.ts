import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecureGuard implements CanLoad , CanActivate {
  constructor(
    public router: Router
  ) { }
  canLoad(route: Route): boolean {
      console.log("INTENTARA")
      alert('No se puede ingresar a este modulo');
      return false;
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

    this.router.navigateByUrl('/');

    return false
  }


}
