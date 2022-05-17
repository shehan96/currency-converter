import { axiosCurrency } from '../Axios/AxiosCurrency';
import { BASE_CURRENCY } from '../Constants/Constants';

/**
 * Takes arguments from the query and fetch currency related data from fixer api
 * @params parent, args, context, info
 * */
export const GetCurrencyByCode = async (parent, args, context, info) => {
  if (!context.isAuthenticated) {
    throw new Error('Unauthenticated');
  }

  let currencyCodes: string = parent.currency_codes.join();

  let result = await axiosCurrency.get('latest', {
    params: {
      base: BASE_CURRENCY,
      symbols: currencyCodes,
    },
    headers: {
      apikey: '' + process.env.FIXER_API_KEY,
    },
  });

  let currencies = Object.keys(result.data.rates).map((key) => {
    return { code: key, exchange_rate: result.data.rates[key] };
  });

  return currencies;
};
