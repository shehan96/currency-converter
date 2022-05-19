import { Input } from 'antd';
import { RetweetOutlined } from '@ant-design/icons';
import classes from './ConvertForm.module.scss';
const { Search } = Input;

type ConvertFormProps = {
  onConvertCurrency: (value : string) => void;
  selectedCountry: string;
};

export const ConvertForm = ({ onConvertCurrency, selectedCountry }: ConvertFormProps) => {
  return (
    <>
      <Search
        type='number'
        placeholder='Enter amount in sek'
        enterButton='Convert'
        size='large'
        prefix={<RetweetOutlined />}
        onSearch={onConvertCurrency}
        disabled={selectedCountry == ''}
      />
    </>
  );
};
