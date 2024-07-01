import { Injectable, inject } from '@angular/core';
import { HousingLocation } from '../interface/housinglocation';
import { Application } from '../interface/application';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor(private httpClient: HttpClient) {}

  url1 = 'http://localhost:4000/homes';
  url2 = 'http://localhost:4000/users';
  url3 = 'http://localhost:4000/applications';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(`${this.url1}/getHomes`);
    console.log('in locations');

    return (await data.json()) ?? [];
  }

  filterResults(text: string) {
    console.log("here");

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.state.toLowerCase().includes(text.toLowerCase()) ||
        housingLocation?.city.toLowerCase().includes(text.toLowerCase()) ||
        housingLocation?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  async getHousingLocationById(
    id: string
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url1}/getHomes/${id}`);
    return (await data.json()) ?? {};
  }

  // submitApplication(formDetails: Application) {

  //   fetch(`${this.url2}/addUser`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formDetails),
  //   }).then(
  //     (res) => {
  //       if(res.ok){
  //         alert("Application submitted successfully!")
  //       }
  //     }
  //   )
  // }

  submitApplication(id: number) {
    this.httpClient.post(`${this.url3}/apply`, id);
    // fetch(`${this.url3}/apply`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ id })
    // })
  }
}
