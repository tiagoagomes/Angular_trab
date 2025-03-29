// Entry point for the Car Management Application
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Bootstrapping the main application component
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error('Error bootstrapping the Car Management Application:', err));