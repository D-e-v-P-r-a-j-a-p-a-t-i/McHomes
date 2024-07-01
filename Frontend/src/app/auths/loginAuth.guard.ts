import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AppService } from '../services/app.service';

export const authGuard: CanActivateFn = (route, state) => {

  const appService = inject(AppService);
  const router = inject(Router);

  if(appService.isLoggedIn()){
    return true
  }
  else{
    router.navigateByUrl("/login")
    return false
  }
};
