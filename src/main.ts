import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// Import AG Grid modules
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

ModuleRegistry.registerModules([ ClientSideRowModelModule ]);

if (typeof window !== 'undefined') {
  // Code that depends on window
}
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
