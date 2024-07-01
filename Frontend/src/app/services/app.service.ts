import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/User';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { HousingLocation } from '../interface/housinglocation';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  url1 = 'http://localhost:4000/homes';
  url2 = 'http://localhost:4000/users';
  url3 = 'http://localhost:4000/applications';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(`${this.url1}/getHomes`);
    console.log('in locations');
    console.log(this.filteredLocationList);
    return (await data.json()) ?? [];
  }

  getHouses(){
    return this.filteredLocationList;
  }

  filterResults(text: string) {
    console.log("here");
    console.log(this.filteredLocationList);

    this.filteredLocationList = this.filteredLocationList.filter(
      (housingLocation) =>
        housingLocation?.state.toLowerCase().includes(text.toLowerCase()) ||
        housingLocation?.city.toLowerCase().includes(text.toLowerCase()) ||
        housingLocation?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url1}/getHomes/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(id: number){
    this.http.post(`${this.url3}/apply`, id)
    // fetch(`${this.url3}/apply`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ id })
    // })
  }





  private expressUrl = 'http://localhost:4000/users';

  private expirationTime = 0;

  private http = inject(HttpClient);

  constructor(private router: Router) {
    this.getAllHousingLocations()
    .then(
      (res) => {
        this.filteredLocationList = res;
        console.log(this.filteredLocationList)
      }
    )
  }

  getExpirationCountDown(): number {
    return parseInt(this.expirationTime.toString().slice(0, 2), 10);
  }

  storeUser(user: User): Observable<void> {
    return this.http.post<void>(`${this.expressUrl}/addUser`, user);
  }

  getCurrentUserData(): Observable<any> {
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${jwtToken}`
    );
    return this.http.get<any>(`${this.expressUrl}/current-user-data`, {
      headers,
    });
  }

  generateToken(email: string, password: string): Observable<any> {
    console.log("second");

    return this.http.post<any>(`${this.expressUrl}/login`, { email, password });
  }

  loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  getTokenExpirationDate(token: string): Date | null {
    try {
      const decoded: any = jwtDecode(token);

      if (!decoded || !decoded.exp) {
        return null;
      }

      const date = new Date(0);
      date.setUTCSeconds(decoded.exp);

      return date;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      console.log('No token found');
      return false;
    }

    const expirationDate = this.getTokenExpirationDate(token);
    this.expirationTime = expirationDate!!.valueOf() - Date.now();
    if (!expirationDate) {
      console.log('Invalid token or no expiration date found');
      return false;
    }

    const isExpired = expirationDate.valueOf() <= Date.now();
    console.log('Current time:', Date.now());
    console.log('Token expiration time:', expirationDate.valueOf());
    console.log('Token expired:', isExpired);

    return !isExpired;
  }

  logoutUser() {
    if (confirm('Are you sure to Logout?')) {
      localStorage.removeItem('token');
      console.log(localStorage.getItem('token'));

      if (this.router) {
        console.log('kb');

        this.router.navigateByUrl('/login');
      } else {
        console.error('Router is not defined');
      }
    }
  }
}
