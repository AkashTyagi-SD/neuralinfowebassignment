import React, { useEffect } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd/es';
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';
import VerifyOtp from './VerifyOtp';
import confieLogo from '../../assets/logo/confie-logo.png';
const { Header, Content, Footer } = Layout;

function Auth ({ match }) {
    const { path } = match;
    const signupLinkText = 'Sign Up';
    const loginLinkText = 'Log In';
    const alreadyHaveAccountText = 'Already have an account?';
    const dontHaveAccountText = "Don't have an account?";
    var isLoginPage = true;
    var isSignUpPage = false;

    useEffect(() => {}, []);

    isLoginPage = window.location.pathname.indexOf('login') > 0 || window.location.pathname.indexOf('forgot-password') > 0;
    isSignUpPage = window.location.pathname.indexOf('signup') > 0;
    return (
        <div id="account_public_page">
            <Layout className="app-layout body-bg4">
                <Header className="app-header">
                    <div className="app-header-left">
                        <a href="/" target="_blank">
                            <img alt="image" src={confieLogo} className="app-logo-img" />
                        </a>
                    </div>

                    {isLoginPage ? (
                        <div className="app-header-right">
                            {dontHaveAccountText}
                            <div className="app-header-button">
                                <Link to={`${path}/signup`}>{signupLinkText}</Link>
                            </div>
                        </div>
                    ) : isSignUpPage ? (
                        <div className="app-header-right">
                            {alreadyHaveAccountText}
                            <div className="app-header-button">
                                <Link to={`${path}/login`}>{loginLinkText}</Link>
                            </div>
                        </div>
                    ) : (
                        <div />
                    )}
                </Header>
                <Content className="app-center-layout">
                    <Switch>
                        <Route path={`${path}/login`} component={Login} />
                        <Route path={`${path}/signup`} component={Register} />
                        <Route path={`${path}/verify-otp`} component={VerifyOtp} />
                        <Route path={`${path}/forgot-password`} component={ForgotPassword} />
                        <Route path={`${path}/reset-password`} component={ResetPassword} />
                        <Redirect from={`${path}`} to={`${path}/login`} />
                    </Switch>
                </Content>
                <Footer className="app-footer">
                    Powered by{' '}
                    <a href="/" target="_blank">
                        Vikasit
                    </a>{' '}
                </Footer>
            </Layout>
        </div>
    );
}

export default Auth;
