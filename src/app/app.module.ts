import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from 'app/app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from 'app/login/login.component';
import {UserComponent} from './user/user.component';

import {UserService} from 'app/services/user.service';
import {AuthenticationService} from 'app/services/authentication.service';
import {AuthGuard} from 'app/guards/auth-guard.service';
import {AdminAuthGuard} from 'app/guards/admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    AuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
