import { useEffect, useState } from 'react';
import { AutoComplete, Spin } from 'antd';
import { useGetAllCountries } from '../../hooks/useGetAllCountries';
import { SearchOutlined } from '@ant-design/icons';
import classes from './Search.module.scss';

export const Search = (props: any) => {
  const [searchText, setSearchText] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [placeholderText, setPlaceholderText] = useState('Country data is loading');

  const { getAllCountryData, allCountryLoading, allCountryData, allCountryError } =
    useGetAllCountries();

  const handleOnChange = (value: string) => {
    setSearchText(value);
  };

  useEffect(() => {
    getAllCountryData().then((result) => {
      let countriesList: any[] = result.data.GetAllCountries;
      setOptions(
        countriesList.map((item) => {
          return {
            value: item.common_name,
          };
        })
      );
      setIsLoading(false);
      setPlaceholderText('Search a country');
    });
  }, []);

  return (
    <>
      <div className={classes.Search}>
        {isLoading ? (
          <Spin className={classes.SearchSpinner} />
        ) : (
          <SearchOutlined className={classes.SearchIcon} />
        )}
        <AutoComplete
          size='large'
          value={searchText}
          options={options}
          placeholder={placeholderText}
          allowClear={true}
          style={{ width: '100%' }}
          onChange={handleOnChange}
          onSelect={props.onSelectCountry}
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
    </>
  );
};
