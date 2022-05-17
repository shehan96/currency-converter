/**
 * Currency convertor function which convert amount in sek to local currency
 * @params amountInSek, exchangeRate
 * */
export const CurrencyConvertor = (amountInSek: any, exchangeRate?: string) => {
  var amount: number = +amountInSek;
  var rate: number = exchangeRate == undefined ? 0 : +exchangeRate;
  if (amount == 0 || amount == null || amount == undefined) {
    return 0;
  } else {
    return (amount * rate).toFixed(2);
  }
};
