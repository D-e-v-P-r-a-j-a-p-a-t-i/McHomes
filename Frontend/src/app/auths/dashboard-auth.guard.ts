import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AppService } from '../services/app.service';

export const dashboardAuthGuard: CanActivateFn = (route, state) => {

  const appService = inject(AppService)
  if(appService.isLoggedIn()){
    return false;
  }
  return true;
};
