import { axiosCurrency } from '../Axios/AxiosCurrency';

export const GetCurrencyByCode = async (parent, args, context, info) => {
  if (!context.isAuthenticated) {
    throw new Error('Unauthenticated');
  }

  let currencyCode = parent.currency_code;

  let result = await axiosCurrency.get('latest', {
    params: {
      base: currencyCode,
      symbols: 'SEK',
    },
    headers: {
      apikey: '' + process.env.FIXER_API_KEY,
    },
  });

  let currency = {
    code: currencyCode,
    exchange_rate_to_sek: result.data.rates['SEK'],
  };

  return currency;
};
