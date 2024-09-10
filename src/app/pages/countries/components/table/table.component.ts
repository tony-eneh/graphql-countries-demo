import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';
import { Countries, CountriesResponse, GetCountriesArgs } from './types';
import { Apollo } from 'apollo-angular';
import { GET_COUNTRIES } from '../../../../../graphql/countries';
import { PaginatorComponent } from '../../../../components/paginator/paginator.component';
import { LoadingComponent } from '../../../../components/loading/loading.component';
import { ErrorMessageComponent } from '../../../../components/error-message/error-message.component';
import { IPaginationQuery } from '../../../../components/paginator/types';

@Component({
  selector: 'app-countries-table',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    DecimalPipe,
    PaginatorComponent,
    LoadingComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() refresh!: EventEmitter<void>;
  @Input() query: GetCountriesArgs = {} as any;

  countries?: Countries;
  error?: string;
  loading = false;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.fetchCountries();
    this.refresh.subscribe(() => this.fetchCountries());
  }

  fetchCountries() {
    // Fetch countries using GraphQL API
    this.loading = true;
    this.apollo
      .watchQuery<CountriesResponse>({
        query: GET_COUNTRIES,
        variables: this.query,
      })
      .valueChanges.subscribe((response) => {
        this.countries = response.data.countries;
        this.error = response.error?.message;
        this.loading = false;
      })
      .add(() => (this.loading = false));
  }

  handlePageChange(pageQuery: IPaginationQuery) {
    this.query = { ...this.query, ...pageQuery };
    this.fetchCountries();
  }
}
