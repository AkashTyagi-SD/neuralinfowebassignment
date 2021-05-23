import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Switch, Route,useHistory } from 'react-router-dom';
import Dashboard from './Dashboard';
import Order from './Order';
const { Header, Sider, Content } = Layout;
const key = '/app';
function Main({ match }) {
    const { path } = match;
    const [collapsed, setCollapsed] = useState(false);
    const history=useHistory();
    const toggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div id="components-layout-demo-custom-trigger">
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                        }}
                    >
                        <Switch>
                            <Route path={path} component={Dashboard} />
                            <Route path={`${key}/order`} component={Order} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

export default Main;
