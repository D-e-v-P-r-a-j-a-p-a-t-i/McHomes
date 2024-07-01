import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { dashboardAuthGuard } from './auths/dashboard-auth.guard';
import { authGuard } from './auths/loginAuth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListedHousesComponent } from './listed-houses/listed-houses.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    component: HomeComponent,
    canActivate: [authGuard],
    canDeactivate: [dashboardAuthGuard],
    children: [
      {
        path: '',
        component: ListedHousesComponent,
        title: 'Homes',
        outlet: 'dashboard'
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
        outlet: 'dashboard'
      },
    ],
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent,
  },
];
