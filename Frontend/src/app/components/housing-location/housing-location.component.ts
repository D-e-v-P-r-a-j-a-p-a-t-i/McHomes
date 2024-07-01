import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HousingLocation } from '../../interface/housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
