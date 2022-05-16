import { Input } from 'antd';
import { RetweetOutlined } from '@ant-design/icons';
import classes from './ConvertForm.module.scss';
import { useState } from 'react';
const { Search } = Input;

export const ConvertForm = (props: any) => {

  return (
    <>
      <Search
        type='number'
        placeholder='Enter amount in sek'
        enterButton='Convert'
        size='large'
        prefix={<RetweetOutlined />}
        onSearch={props.onConvertCurrency}
        disabled={props.selectedCountry == ''}
      />
    </>
  );
};
