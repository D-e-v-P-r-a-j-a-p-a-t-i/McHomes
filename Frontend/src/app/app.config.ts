import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { ActivatedRouteSnapshot, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient( withFetch()), FormsModule]
};
