import React, { FC, useEffect } from 'react';
import { Avatar, Dropdown, Layout as AntdBaseLayout, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { SelectEventHandler } from 'rc-menu/es/interface';
import { useHistory, useRouteMatch } from 'react-router-dom';

import styles from './style.less';
import { Dispatch } from '../../store';
import { getLocale } from '../../helpers';

type Props =  {
  config: ManagementResponse.Config.ManagementWeb.HeaderMenuData
}

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


const Layout: FC<Props> = ({ children, config }) => {
  const history = useHistory();
  const dispatch = useDispatch<Dispatch>();

  const { menus, avatarURL } = config.value;

  useEffect(() => {
    dispatch.config.setConfigData({
      key: 'management-web-header-menu',
      data: config
    })
  }, [config, dispatch.config]);



  const handleHeaderMenuSelect: SelectEventHandler = ({ key }) => {
    const m = menus.find((v) => v.key === key) ;
    if (m) {
      history.push(m.path);
    }
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
          {
            menus.map((m) => (
              <MenuItem key={m.key}>{getLocale(m.name)}</MenuItem>
            ))
          }
        </Menu>
        <Dropdown overlay={overLayMenu} placement="bottomCenter" trigger={['click']}>
          <Avatar src={avatarURL} className={styles.avatar} />
        </Dropdown>
      </Header>
      <AntdBaseLayout className={styles.content}>
        {children}
      </AntdBaseLayout>
      <Footer className={styles.footer}>
        Management Web ©2020
      </Footer>
    </AntdBaseLayout>
  )
};

export default Layout;
