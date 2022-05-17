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

  let currencyArray = Object.keys(currencies).map((key) => [key, currencies[key]]);

  let currency_codes: string[] = [];

  for (var i = 0; i < currencyArray.length; i++) {
    currency_codes.push(currencyArray[i][0]);
  }

  let country = {
    common_name: name.common,
    official_name: name.official,
    flag: flags.svg,
    population: population,
    currency_codes: currency_codes,
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
