import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../components/housing-location/housing-location.component';
import { HousingLocation } from '../interface/housinglocation';
import { HousingService } from '../services/housing.service';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listed-houses',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './listed-houses.component.html',
  styleUrl: './listed-houses.component.css',
})
export class ListedHousesComponent {

  housingService: HousingService = inject(HousingService);
  appService: AppService = inject(AppService);
  filteredLocationList: HousingLocation[] = [];
  router: Router = inject(Router);

  constructor() {
    this.appService.getAllHousingLocations()
    .then(
      (res) => {
        this.filteredLocationList = res;
      }
    )

    this.filteredLocationList = this.appService.getHouses()
  }
}
