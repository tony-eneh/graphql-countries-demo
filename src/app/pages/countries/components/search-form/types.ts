import { FormControl } from '@angular/forms';

export interface IGetCountriesForm {
  namePrefix: FormControl<string | null>;
  currencyCode: FormControl<string | null>;
}
