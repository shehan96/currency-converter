import { Currency } from './Currency.model';

export class Country {
  common_name: string;
  official_name: string;
  flag: string;
  population: number;
  currency_codes: string[];
  amount_in_sek: number;
  currencies: Currency[];
}
