import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { SelectEventHandler } from 'rc-menu/es/interface';

import styles from './style.less';

const { Content, Sider } = Layout;
const { Item: MenuItem, SubMenu } = Menu;

const SideMenu: FC = ({ children }) => {
  const history = useHistory();

  const handleNavMenuSelect: SelectEventHandler = ({ key }) => {
    history.push(`/dashboard/config/${key}`);
  };

  return (
    <>
      <Sider width={200}  breakpoint="md">
        <Menu
          mode="inline"
          defaultOpenKeys={['management-web', 'home-page-web']}
          defaultSelectedKeys={['management-web-header-menu']}
          style={{ height: '100%', borderRight: 0 }}
          onSelect={handleNavMenuSelect}
        >
          <SubMenu key="management-web" title="Management Web">
            <MenuItem key="management-web-header-menu">Header Menu Config</MenuItem>
            <MenuItem key="management-web-side-menu">Side Menu Config</MenuItem>
          </SubMenu>
          <SubMenu key="home-page-web" title="Home Page Web">
            <MenuItem key="home-page-web-default">Default</MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content className={styles.content}>
          {children}
        </Content>
      </Layout>
    </>
  )
};

export default SideMenu;
