import { Component, OnInit } from '@angular/core';
import {CityService} from 'app/services/city.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  city$;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.city$ = this.cityService.get();
  }
}
