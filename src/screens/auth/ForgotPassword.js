import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Input, Button } from 'antd/es';
import { MailOutlined } from '@ant-design/icons';

function ForgotPassword() {
    const initialValues = {
        email: '',
    };
    const emailLabel = 'Email',
        emailText = 'Enter your email',
        loginLinkText = 'or Log In ',
        forgotPasswordTitle = 'Welcome back!',
        requiredEmail = 'Please enter email',
        correctEmail = 'Please enter correct email address',
        sendMeLinkButtonText = 'Send me the link';

    function onFinish({ email }, { setSubmitting }) {}
    return (
        <div className="main-form">
            <div className="main-form-title">{forgotPasswordTitle}</div>
            <Form name="forgot-password-form" initialValues={initialValues} onFinish={onFinish} hideRequiredMark={true} size="large">
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
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" className="main-form-button-text" block>
                        {sendMeLinkButtonText}
                    </Button>
                </Form.Item>
                <Row className="center">
                    <Col className="link-small">
                        <Link to="/auth/login">{loginLinkText}</Link>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default ForgotPassword;
