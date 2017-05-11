import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class CityService {
  constructor(private http: AuthHttp) {
  }

  get() {
    return this.http.get('/springjwt/cities').map(res => res.json());
  }
}
