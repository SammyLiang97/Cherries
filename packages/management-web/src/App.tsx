import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import Routes from './routes';
import store from './store';


type Props =  {
  config: ManagementResponse.Config.ManagementWeb.HeaderMenuData
}

const App: FC<Props> = ({ config }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout config={config}>
          <Routes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
