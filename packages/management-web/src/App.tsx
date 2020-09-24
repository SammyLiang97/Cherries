import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import Routes from './routes';
import store from './store';


type Props =  {
  baseConfigs: {
    headerMenu: Config.ManagementWeb.HeaderMenuData;
    sideMenu: Config.ManagementWeb.SideMenuData;
  }
}

const App: FC<Props> = ({ baseConfigs }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout baseConfigs={baseConfigs}>
          <Routes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
