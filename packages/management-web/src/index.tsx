import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
import { axios } from './services';


const fetchManagementHeaderMenuConfig = async () => {
  const res = await axios.get<Res.HeaderMenuConfigRes>('/api/config/management-web-header-menu');

  return res.data.data;
};

const fetchManagementSideMenuConfig = async () => {
  const res = await axios.get<Res.SideMenuConfigRes>('/api/config/management-web-side-menu');

  return res.data.data;
}

const start = async () => {

  const baseConfigs = await Promise.all([fetchManagementHeaderMenuConfig(), fetchManagementSideMenuConfig()])
    .then(res => ({
      headerMenu: res[0],
      sideMenu: res[1]
    }));

  const App = lazy(() => import('./App'));

  ReactDOM.render(
    <Suspense fallback={<>Loading...</>}>
      <React.StrictMode>
        <App baseConfigs={baseConfigs} />
      </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
  );
}

start();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
