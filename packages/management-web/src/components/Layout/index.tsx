import React, { FC } from 'react';
import { Layout as AntdBaseLayout, Menu } from 'antd';
import { SelectEventHandler } from 'rc-menu/es/interface';
import { useHistory } from 'react-router-dom';

import styles from './style.less';

const { Header, Footer } = AntdBaseLayout;

const { Item: MenuItem } = Menu;

const Layout: FC = ({ children }) => {
  const history = useHistory();

  const handleHeaderMenuSelect: SelectEventHandler = ({ key }) => {
    history.push(`/dashboard/${key}`);
  };

  return (
    <AntdBaseLayout>
      <Header>
        <div className={styles.logo}>
          Management Web
        </div>
        <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['config']} onSelect={handleHeaderMenuSelect}>
          <MenuItem key="config">配置平台</MenuItem>
          <MenuItem key="settings">系统设置</MenuItem>
        </Menu>
      </Header>
      <AntdBaseLayout>
        {children}
      </AntdBaseLayout>
      <Footer className={styles.footer}>
        Management Web ©2020 Created by Sammy Liang
      </Footer>
    </AntdBaseLayout>
  )
};

export default Layout;
