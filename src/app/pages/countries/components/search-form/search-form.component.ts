import { Component, EventEmitter, Output } from '@angular/core';
import { GetCountriesArgs } from '../table/types';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IGetCountriesForm } from './types';

@Component({
  selector: 'app-countries-search-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  @Output() search = new EventEmitter<GetCountriesArgs>();

  form: FormGroup<IGetCountriesForm> = new FormGroup<IGetCountriesForm>({
    namePrefix: new FormControl(''),
    currencyCode: new FormControl(''),
  });

  onSearch() {
    this.search.emit(this.form.value);
  }
}
