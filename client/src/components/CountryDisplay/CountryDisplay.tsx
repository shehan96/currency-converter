import { useState } from 'react';
import { TeamOutlined } from '@ant-design/icons';
import { BASE_CURRENCY } from '../../constants/Constants';
import classes from './CountryDisplay.module.scss';
import { Currency } from '../../models/Currency.model';

export const CountryDisplay = (props: any) => {
  const [sekCurrencyValue, setLocalCurrencyValue] = useState(1);

  const currencyConvertor = (exchangeRate?: string) => {
    var amount: number = +props.amountInSek;
    var rate: number = exchangeRate == undefined ? 0 : +exchangeRate;
    if (amount == 0 || amount == null || amount == undefined) {
      return 0;
    } else {
      return (amount * rate).toFixed(2);
    }
  };

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
                <td>{sekCurrencyValue}</td>
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
                  {currencyConvertor(
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
