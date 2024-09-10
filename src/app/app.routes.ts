import { Routes } from '@angular/router';
import { CountriesComponent } from './pages/countries/countries.component';

export const routes: Routes = [
  {
    path: '**',
    component: CountriesComponent,
  },
];
