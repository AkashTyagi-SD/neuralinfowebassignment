import React, { useState } from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, message, Row } from 'antd/es';
import { useHistory, Link } from 'react-router-dom';
const key = 'login';
function Login({ match }) {
    const { path } = match;

    const initialValues = {
        email: '',
        password: '',
        remember: true,
    };

    const emailLabel = 'Email';
    const emailText = 'Enter your email';
    const passwordLabel = 'Password';
    const passwordText = 'Enter password';
    const sso = 'SSO';
    const loginTitle = 'Welcome back!';
    const forgetPasswdText = 'Forget Password?';
    const loginButtonText = 'Log In';
    const loginWithText = 'or login with ';
    const requiredEmail = 'Please enter email';
    const correctEmail = 'Please enter correct email address';
    const requiredPassword = 'Please enter password';

    const [loginButtonLoading, setLoginButtonLoading] = useState(false);

    const history = useHistory();

    function onFinish(values) {
        console.log('Received values of form: ', values);
        message.loading({ content: 'Loading...', key });
        setLoginButtonLoading(true);
        history.replace('/app/dashboard');
        // accountService
        //     .login(values.username, values.password)
        //     .then(() => {
        //         const { from } = location.state || { from: { pathname: '/' } };
        //         message.success({ content: 'Login successful!', key, duration: 2 });
        //         history.push(from);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         setLoginButtonLoading(false);
        //         message.error({ content: error, key, duration: 2 });
        //     });
    }

    return (
        <div className="main-form">
            <div className="main-form-title">{loginTitle}</div>
            <Form name="normal-login-form" initialValues={initialValues} onFinish={onFinish} hideRequiredMark size="large">
                <Row className="ant-form-item-label">
                    <span>{emailLabel}</span>
                </Row>

                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: requiredEmail,
                        },
                        {
                            type: 'email',
                            message: correctEmail,
                        },
                    ]}
                >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder={emailText} />
                </Form.Item>

                <Row className="ant-form-item-label">
                    <span>{passwordLabel}</span>
                </Row>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: requiredPassword,
                        },
                    ]}
                >
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder={passwordText} />
                </Form.Item>

                <div className="main-form-options">
                    <Link to="forgot-password" className="inline-link">
                        {forgetPasswdText}
                    </Link>
                </div>

                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" className="main-form-button-text" loading={loginButtonLoading} block>
                        {loginButtonText}
                    </Button>
                </Form.Item>

                <Row className="link-small center">
                    <Col>
                        <Link to={`${path}/sso`}>
                            {loginWithText}
                            <span className="highlighter">{sso}</span>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default Login;
