import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  constructor() {
  }

  login(access_token: string) {
    // parse user here and save it
  }

  logout() {
    // TODO forget user
  }

  isAdmin() {
    // TODO
  }
}
