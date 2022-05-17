import { Form, Input, Button, message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirstRender } from '../../hooks/useFirstRender';
import { useLogin } from '../../hooks/useLogin';
import classes from './Login.module.scss';

export const Login = () => {
  const [emailPasswordCredentials, setemailPasswordCredentials] = useState({
    email: '',
    password: '',
  });
  const firstRender = useFirstRender();
  const navigate = useNavigate();

  const { runLoginMutation, loginMutationData, loginMutationLoading, loginMutationError } =
    useLogin({
      email: emailPasswordCredentials.email,
      password: emailPasswordCredentials.password,
    });

  useEffect(() => {
    if (!firstRender) {
      runLoginMutation()
        .then((result: any) => {
          let token: string = result.data.Login.token;
          localStorage.setItem('token', token);
          navigate('/', { replace: true });
        })
        .catch((error) => {
          message.error(JSON.stringify(error.message, null, 2) + '\nPlease try again');
        });
    }
  }, [emailPasswordCredentials]);

  /**
   * Set email password credentials after successful form submission
   * */
  const useOnFinish = (values: any) => {
    setemailPasswordCredentials({ email: values.email, password: values.password });
  };

  /**
   * Display error message after unsuccessful form submission
   * */
  const onFinishFailed = (errorInfo: any) => {
    message.error(errorInfo.errorFields[0].errors[0]);
  };

  return (
    <>
      <div className={classes.LoginBackgraound}>
        <div className={classes.LoginContainer}>
          <h1>Login Page</h1>
          <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={useOnFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
