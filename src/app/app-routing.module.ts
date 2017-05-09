import {NgModule} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';

import {LoginComponent} from 'app/login/login.component';
import {AdminComponent} from 'app/admin/admin.component';
import {AuthGuard} from 'app/guards/auth-guard.service';
import {AdminAuthGuard} from 'app/guards/admin-auth-guard.service';
import {HomeComponent} from 'app/home/home.component';
import {UserComponent} from 'app/user/user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
