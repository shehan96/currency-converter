import { useState } from 'react';
import { TeamOutlined } from '@ant-design/icons';
import classes from './CountryDisplay.module.scss';

export const CountryDisplay = (props: any) => {
  const [localCurrencyValue, setLocalCurrencyValue] = useState(1);

  const currencyConvertor = () => {
    let amount: number = +props.amountInSek;
    if (amount == 0 || amount == null || amount == undefined) {
      return 0;
    } else {
      return (amount / props.exchangeRateToSek).toFixed(2);
    }
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
        <h3 className={classes.CurrencyCode}></h3>
        <table className={classes.CurrencyContainer}>
          <thead>
            <tr>
              <th>{props.currencyCode}</th>
              <th>SEK</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{localCurrencyValue}</td>
              <td>{props.exchangeRateToSek}</td>
            </tr>
          </tbody>
        </table>
        <div className={classes.divHeight}></div>
        <table className={classes.CurrencyContainer}>
          <thead>
            <tr>
              <th>CONVERTED AMOUNT IN {props.currencyCode}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currencyConvertor()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
