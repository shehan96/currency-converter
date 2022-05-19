import { useState } from 'react';
import { TeamOutlined } from '@ant-design/icons';
import { BASE_CURRENCY } from '../../constants/Constants';
import classes from './CountryDisplay.module.scss';
import { Currency } from '../../models/Currency.model';
import { CurrencyConvertor } from '../../utils/CurrencyConvertor';

type CountryDisplayProps = {
  flag: string;
  commonName: string;
  officialName: string;
  population: number;
  currencies: Currency[];
  amountInSek: number;
  currencyCodes: string[];
};

export const CountryDisplay = ({
  flag,
  commonName,
  officialName,
  population,
  currencies,
  amountInSek,
  currencyCodes,
}: CountryDisplayProps) => {
  const [baseCurrencyValue, setBaseCurrencyValue] = useState(1);

  /**
   * Get currency related values as currency object using currency array
   * @params currencies, currencyCode
   * */
  const getCurrencyRelatedValues = (currencies: Currency[], currencyCode: string) => {
    var currencyObject = currencies.find((object) => {
      return object.code === currencyCode;
    });
    return currencyObject;
  };

  return (
    <>
      <div className={classes.CountryDisplayContainer}>
        <img className={classes.CountryFlag} src={flag} />
        <h1 className={classes.CommonName}>{commonName}</h1>
        <span className={classes.OfficialName}>{officialName}</span>
        <h3 className={classes.Population}>
          <TeamOutlined />
          <span>{population}</span>
        </h3>
        {currencyCodes.map((localCurrencyCode: string) => (
          <table key={localCurrencyCode} className={classes.CurrencyContainer}>
            <thead>
              <tr>
                <th>{BASE_CURRENCY}</th>
                <th>{localCurrencyCode}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{baseCurrencyValue}</td>
                <td>
                  {getCurrencyRelatedValues(currencies, localCurrencyCode)?.exchange_rate.toFixed(
                    2
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
        {currencyCodes.map((localCurrencyCode: string) => (
          <table key={localCurrencyCode} className={classes.CurrencyContainer}>
            <thead>
              <tr>
                <th>CONVERTED AMOUNT IN {localCurrencyCode}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {CurrencyConvertor(
                    amountInSek,
                    getCurrencyRelatedValues(currencies, localCurrencyCode)
                      ?.exchange_rate.toFixed(2)
                      .toString()
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
};
