import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {UserService} from '../services/user.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAdmin = this.userService.isAdminUser();
    if (isAdmin) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
