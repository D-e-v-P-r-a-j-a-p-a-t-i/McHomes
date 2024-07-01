import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';
import { AppService } from '../../services/app.service';
import { Router, RouterOutlet } from '@angular/router';
import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  router: Router = inject(Router)
  housingService: HousingService = inject(HousingService)
  appService: AppService = inject(AppService)

  constructor() {
    // console.log("first");
    // this.appService.setFilteredLocationList()
  }

  filterResults(search: string) {
    console.log("object")
    this.appService.filterResults(search)
  }

  logout(){
    this.appService.logoutUser()
  }
}
