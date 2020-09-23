import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
import { axios } from './services';


const fetchManagementWebBaseConfig = async () => {
  const res = await axios.get<ManagementResponse.Config.ManagementWeb.HeaderMenuRes>('/api/config/management-web-header-menu');

  return res.data.data;
};

const start = async () => {

  const config = await fetchManagementWebBaseConfig();

  const App = lazy(() => import('./App'));

  ReactDOM.render(
    <Suspense fallback={<>Loading...</>}>
      <React.StrictMode>
        <App config={config} />
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
