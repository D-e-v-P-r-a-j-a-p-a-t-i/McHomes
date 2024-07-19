import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../interface/housinglocation';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: `./details.component.html`,
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  housingService: HousingService = inject(HousingService);

  route: ActivatedRoute = inject(ActivatedRoute);

  housingLocation: HousingLocation | undefined;

  housingLocationId = ''
    constructor(private formBuilder: FormBuilder) {
      console.log("laksbsldkjbasdljhb")
        this.housingLocationId = this.route.snapshot.params['id'];
        console.log(this.housingLocationId);
        this.housingService.getHousingLocationById(this.housingLocationId).then((housingLocation) => {
          this.housingLocation = housingLocation;
        });
    }

    // submitApplication() {
    //   if (this.applyForm.invalid) {
    //     this.applyForm.markAllAsTouched();
    //     return;             
    //   }
    //   this.housingService.submitApplication(this.applyForm.value as Application);
    // }
    // resetDetails(){
    //   this.applyForm.reset();
    // }

    // applyForm = this.formBuilder.group({
    //   firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z'-]+$/)]],
    //   lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z'-]+$/)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   houseId: this.route.snapshot.params['id']
    // })

    submitApplication(){
      this.housingService.submitApplication(this.route.snapshot.params['id'])
    }
}
