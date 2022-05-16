import { axiosCountries } from '../Axios/AxiosCountries';

export const GetCountryByName = async (parent, args, context, info) => {
  if (!context.isAuthenticated) {
    throw new Error('Unauthenticated');
  }

  let { searchCountry } = args;

  let restEndPoint = 'name/' + searchCountry;

  let result = await axiosCountries.get(restEndPoint, {
    params: {
      fullText: true,
    },
  });

  let { name, population, currencies, flags } = result.data[0];

  let currency_code, currency_name, currency_symbol;

  for (var key in currencies) {
    currency_code = key;
    currency_name = currencies[key].name;
    currency_symbol = currencies[key].symbol;
  }

  let country = {
    common_name: name.common,
    official_name: name.official,
    flag: flags.svg,
    population: population,
    currency_code: currency_code,
  };

  return country;
};

export const GetAllCountryNames = async (parent, args, context, info) => {
  let restEndPoint = 'all';

  let result = await axiosCountries.get(restEndPoint);

  let dataArray: any[] = result.data;

  let resultArray: any[] = [];

  dataArray.forEach((item) => {
    let countryObject = {
      common_name: item.name.common,
      official_name: item.name.official,
    };

    resultArray.push(countryObject);
  });

  return resultArray;
};
