import { useCallback, useEffect, useState } from 'react';
import { Search } from '../../components/Search/Search';
import { NavBar } from '../../components/NavBar/NavBar';
import { Col, Empty, Layout, Row, message, Alert } from 'antd';
import { useFirstRender } from '../../hooks/useFirstRender';
import classes from './Home.module.scss';
import { ConvertForm } from '../../components/ConvertForm/ConvertForm';
import { useGetCountry } from '../../hooks/useGetCountry';
import { Country } from '../../models/Country.model';
import { CountryDisplay } from '../../components/CountryDisplay/CountryDisplay';
import { LoadingOutlined } from '@ant-design/icons';
const { Content } = Layout;

export const Home = () => {
  const [countryText, setCountryText] = useState('');
  const [currencyValue, setCurrencyValue] = useState(0);
  const firstRender = useFirstRender();
  const { getCountryData, countryLoading, countryData, countryError } = useGetCountry(countryText);
  const [countryList, setCountryList] = useState<Country[]>([]);

  const handleSelectCountry = useCallback((value: string) => {
    setCountryText(value);
  }, []);

  const handleConvertCurrency = useCallback((value: number) => {
    setCurrencyValue(value);
  }, []);

  useEffect(() => {
    if (!firstRender) {
      let newCountry: boolean = true;

      countryList.forEach((country) => {
        if (country.common_name.toLowerCase() === countryText.toLowerCase()) {
          newCountry = false;
        }
      });

      if (newCountry) {
        getCountryData()
          .then((result) => {
            setCountryList((countryList) => [...countryList, result.data.GetCountryDetails]);
          })
          .catch((error) => {
            message.error(
              JSON.stringify(error.message, null, 2) +
                '\nPlease visit login page to generate new token'
            );
            // console.log(JSON.stringify(error.message, null, 2));
          });
      } else {
        message.warning('This country already exists!!');
      }
    }
  }, [countryText]);

  useEffect(() => {
    let tempCountryArray: Country[] = countryList;
    if (currencyValue.toString() == '') {
    } else {
      tempCountryArray.forEach((country) => {
        let tempCountry: Country = {
          common_name: country.common_name,
          population: country.population,
          official_name: country.official_name,
          flag: country.flag,
          currency_codes: country.currency_codes,
          amount_in_sek: currencyValue,
          currencies: country.currencies,
        };
        setCountryList(countryList.filter((item) => item.common_name !== tempCountry.common_name));
        setCountryList((countryList) => [...countryList, tempCountry]);
      });
    }
  }, [currencyValue]);

  const renderCountrList = () => {
    return (
      <Row className={classes.AlignItems}>
        {countryList.map((country: Country) => (
          <Col md={{ span: 6 }} key={country.common_name}>
            <CountryDisplay
              commonName={country.common_name}
              officialName={country.official_name}
              population={country.population}
              flag={country.flag}
              currencyCodes={country.currency_codes}
              amountInSek={currencyValue}
              currencies={country.currencies}
            />
          </Col>
        ))}
      </Row>
    );
  };

  const renderEmptyMessage = () => {
    let message: string = 'Search and select a country to see details and convert currencies.';
    return (
      <Row className={classes.AlignItems}>
        <Col className={classes.MarginTop} md={{ span: 6 }}>
          <Empty description={message} />
        </Col>
      </Row>
    );
  };

  const renderCountryLoadingMessage = () => {
    return (
      <Row className={classes.AlignItems}>
        <Col className={classes.MarginTop} md={{ span: 6 }}>
          <Alert
            icon={<LoadingOutlined />}
            showIcon
            message='Country data is loading'
            type='info'
          />
        </Col>
      </Row>
    );
  };

  return (
    <>
      <NavBar />
      <Layout className={classes.Layout}>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ margin: '32px 0' }}></div>
          <div className={classes.SiteLayoutContent}>
            <Row className={classes.AlignItems}>
              <Col className={classes.MarginRight} md={{ span: 11 }}>
                <Search onSelectCountry={handleSelectCountry} />
              </Col>
              <Col md={{ span: 11 }}>
                <ConvertForm
                  onConvertCurrency={handleConvertCurrency}
                  selectedCountry={countryText}
                />
              </Col>
            </Row>
            {countryLoading ? renderCountryLoadingMessage() : null}
            {countryList.length == 0 ? renderEmptyMessage() : renderCountrList()}
          </div>
        </Content>
      </Layout>
    </>
  );
};
