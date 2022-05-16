export class Country {
  population: number;
  official_name: string;
  common_name: string;
  flag: string;
  currency_code: string;
  amount_in_sek: number;
  currency: {
    exchange_rate_to_sek: number;
  };
}
