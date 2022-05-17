import { Menu, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header } = Layout;

export const NavBar = () => {
  const navigate = useNavigate();

  /**
   * Function to handle navigation between home page and login page
   * @params value : Object pass by onClick method of the Menu element
   * */
  const navigateToLoginPage = (value: any) => {
    if (value.key === 'home') {
      navigate('/', { replace: true });
    } else {
      localStorage.clear();
      navigate('/login', { replace: true });
    }
  };

  const menuList = [
    { label: 'Home', key: 'home' },
    { label: 'Login', key: 'login' },
  ];

  return (
    <Header>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['home']}
        items={menuList}
        onClick={navigateToLoginPage}
      />
    </Header>
  );
};
