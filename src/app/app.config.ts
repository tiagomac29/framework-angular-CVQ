import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = { // Certifique-se de que está exportando!
    providers: [
      provideZoneChangeDetection({ eventCoalescing: true }), 
      provideRouter(routes)
    ]
  };