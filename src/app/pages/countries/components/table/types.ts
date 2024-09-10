import { IPaginationQuery } from '../../../../components/paginator/types';
import { IPageInfo } from '../../../../types';

export type Countries = {
  totalCount: number;
  pageInfo: IPageInfo;
  edges: {
    cursor: string;
    node: {
      capital: string;
      currencyCodes: string[];
      name: string;
      flagImageUri: string;
      code: string;
    };
  }[];
};

export type CountriesResponse = {
  countries: Countries;
};

export type GetCountriesArgs = {
  namePrefix?: string | null;
  currencyCode?: string | null;
} & IPaginationQuery;
