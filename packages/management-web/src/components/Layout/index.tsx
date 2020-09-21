import React, { FC } from 'react';
import { Avatar, Dropdown, Layout as AntdBaseLayout, Menu } from 'antd';
import { SelectEventHandler } from 'rc-menu/es/interface';
import { useHistory, useRouteMatch } from 'react-router-dom';

import avatarIMG from '../../assets/default_avatar.jpg';
import styles from './style.less';

const { Header, Footer } = AntdBaseLayout;

const { Item: MenuItem } = Menu;

const overLayMenu = () => {
  return (
    <Menu>
      <MenuItem>
        Log out
      </MenuItem>
    </Menu>
  );
};


const Layout: FC = ({ children }) => {
  const history = useHistory();

  const handleHeaderMenuSelect: SelectEventHandler = ({ key }) => {
    history.push(`/dashboard/${key}`);
  };

  const matchP = useRouteMatch<{ type: string }>('/dashboard/:type')?.params;

  let type;
  if (matchP) {
    type = matchP.type;
  }


  return (
    <AntdBaseLayout>
      <Header className={styles.header}>
        <div className={styles.logo}>
          Management Web
        </div>
        <Menu mode="horizontal" theme="dark" defaultSelectedKeys={[type || 'config']} onSelect={handleHeaderMenuSelect}>
          <MenuItem key="config">配置平台</MenuItem>
          <MenuItem key="settings">系统设置</MenuItem>
        </Menu>
        <Dropdown overlay={overLayMenu} placement="bottomCenter" trigger={['click']}>
          <Avatar src={avatarIMG} className={styles.avatar} />
        </Dropdown>
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
