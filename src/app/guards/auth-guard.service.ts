import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';

import {TOKEN_NAME} from 'app/services/auth.constant';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (tokenNotExpired(TOKEN_NAME)) {
      return true;
    } else {
      this.router.navigate(['login'], {queryParams: {redirectTo: state.url}});
      return false;
    }
  }
}
