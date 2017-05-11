import { Component, OnInit } from '@angular/core';
import {CityService} from 'app/services/city.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  city$;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.city$ = this.cityService.get();
  }
}
