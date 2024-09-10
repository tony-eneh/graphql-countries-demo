import { Component, EventEmitter } from '@angular/core';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { TableComponent } from './components/table/table.component';
import { GetCountriesArgs } from './components/table/types';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [SearchFormComponent, TableComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
})
export class CountriesComponent {
  refresh = new EventEmitter<void>();
  query: GetCountriesArgs = {} as any;
}
