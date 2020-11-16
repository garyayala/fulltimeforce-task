import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router,
              private authService: AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      const signedIn = this.authService.isAuthenticated();
      console.log(signedIn);
      if (!signedIn) {
        this.router.navigate(['signin']);
        return false;
      }

      return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      const signedIn = this.authService.isAuthenticated();
      console.log(signedIn);
      if (!signedIn) {
        this.router.navigate(['signin']);
        return false;
      }

      return true;
  }

}
