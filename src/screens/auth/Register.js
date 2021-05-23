import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Row } from 'antd/es';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const key = 'signup';

function Register({ history }) {
    const initialValues = {
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    };

    const registerTitle = "Let's go!",
        fullNameLabel = 'Full Name',
        fullNameText = 'Akash Tyagi',
        passwordLabel = 'Choose Password',
        passwordText = '••••••',
        emailLabel = 'Email',
        emailText = 'example@site.com',
        registerButtonLoading = false,
        showPasswordLinkLabel = 'Show',
        hidePasswordLinkLabel = 'Hide',
        registerWithText = 'signup with ',
        sso = 'SSO',
        registerButtonText = 'Register on Confie',
        requiredFullName = 'Please enter full name!',
        requiredEmail = 'Please enter email!',
        correctEmail = 'Please enter correct email address!',
        requiredPassword = 'Please enter password',
        signupFootnote = 'By clicking Sign Up button, you agree to our',
        termsOfServiceText = 'Terms of Service',
        privacyPolicyText = 'Privacy Policy';

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordLabel, setShowPasswordLabel] = useState(showPasswordLinkLabel);

    function showHidePassword() {
        if (showPassword) {
            setShowPasswordLabel(showPasswordLinkLabel);
        } else {
            setShowPasswordLabel(hidePasswordLinkLabel);
        }
        setShowPassword(!showPassword);
    }
    function onFinish(values) {
        console.log('Received values of register form: ', values);
        message.loading({ content: 'Loading...', key });

        let user = { fullname: values.fullname, email: values.email, password: values.password };
        console.log(user);
    }

    return (
        <div>
            <div className="main-form">
                <div className="signup-form">
                    <div className="main-form-title">{registerTitle}</div>
                    <Form size="large" name="normal-signup-form" initialValues={initialValues} onFinish={onFinish}>
                        <Row className="ant-form-item-label">
                            <span>{fullNameLabel}</span>
                        </Row>
                        <Form.Item
                            name="fullname"
                            rules={[
                                {
                                    required: true,
                                    message: requiredFullName,
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={fullNameText} />
                        </Form.Item>
                        <Row className="ant-form-item-label">
                            <span>{emailLabel}</span>
                        </Row>
                        <Form.Item
                            name="email"
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
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type={showPassword ? 'text' : 'password'}
                                placeholder={passwordText}
                            />
                        </Form.Item>
                        <div className="main-form-options">
                            <Link to="#" className="inline-link" onClick={showHidePassword}>
                                {showPasswordLabel}
                            </Link>
                        </div>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="main-form-button-text" loading={registerButtonLoading} block>
                                {registerButtonText}
                            </Button>
                        </Form.Item>
                        <Row className="link-small center-with-margin">
                            <Link to="signup/sso">
                                {registerWithText}
                                <span className="highlighter">{sso}</span>
                            </Link>
                        </Row>
                    </Form>
                    <div className="signup-footnote">
                        {signupFootnote}
                        <a>{termsOfServiceText}</a> and <a>{privacyPolicyText}</a> .
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
