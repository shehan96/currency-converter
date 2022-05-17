import { useState } from 'react';
import { TeamOutlined } from '@ant-design/icons';
import { BASE_CURRENCY } from '../../constants/Constants';
import classes from './CountryDisplay.module.scss';
import { Currency } from '../../models/Currency.model';
import { CurrencyConvertor } from '../../utils/CurrencyConvertor';

export const CountryDisplay = (props: any) => {
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
        <img className={classes.CountryFlag} src={props.flag} />
        <h1 className={classes.CommonName}>{props.commonName}</h1>
        <span className={classes.OfficialName}>{props.officialName}</span>
        <h3 className={classes.Population}>
          <TeamOutlined />
          <span>{props.population}</span>
        </h3>
        {props.currencyCodes.map((localCurrencyCode: string) => (
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
                  {getCurrencyRelatedValues(
                    props.currencies,
                    localCurrencyCode
                  )?.exchange_rate.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
        {props.currencyCodes.map((localCurrencyCode: string) => (
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
                    props.amountInSek,
                    getCurrencyRelatedValues(props.currencies, localCurrencyCode)
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
