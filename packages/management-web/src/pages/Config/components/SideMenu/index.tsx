import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SelectEventHandler } from 'rc-menu/es/interface';

import styles from './style.less';
import { Dispatch } from '../../../../store';
import { getLocale } from '../../../../helpers';

type Props = {
  config: Config.ManagementWeb.SideMenuData
}

const { Content, Sider } = Layout;
const { Item: MenuItem, SubMenu } = Menu;

const SideMenu: FC<Props> = ({ children, config }) => {
  const history = useHistory();
  const dispatch = useDispatch<Dispatch>();

  const handleNavMenuSelect: SelectEventHandler = ({ key }) => {
    history.push(`${key}`);

    dispatch.config.fetchConfigDataByKey({
      key: key as string
    });
  };

  const { menus, defaultSelectedKey } = config.value;

  return (
    <>
      <Sider width={200}  breakpoint="md">
        {}
        <Menu
          mode="inline"
          defaultOpenKeys={menus.map((m) => m.key)}
          defaultSelectedKeys={[defaultSelectedKey]}
          style={{ height: '100%', borderRight: 0 }}
          onSelect={handleNavMenuSelect}
        >
          {
            menus.map((m) => {
              if (m.children) {
                return (
                  <SubMenu key={m.key} title={getLocale(m.name)}>
                    {
                      m.children.map((tm) => (
                        <MenuItem key={tm.key}>{getLocale(tm.name)}</MenuItem>
                      ))
                    }
                  </SubMenu>
                )
              } else {
                return (
                  <MenuItem key={m.key}>{getLocale(m.name)}</MenuItem>
                )
              }
            })
          }
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
