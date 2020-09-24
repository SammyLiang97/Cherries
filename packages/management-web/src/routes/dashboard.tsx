import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ROUTE = '/dashboard';

const Config = lazy(() => import('../pages/Config'));
const Settings = lazy(() => import('../pages/Settings'));

export default (
  <Switch>
    <Route key="dashboard" path={ROUTE} exact>
      <Redirect to={`${ROUTE}/config`} />
    </Route>

    <Route key="config" path={`${ROUTE}/config`}>
      <Redirect to={`${ROUTE}/config/management-web-header-menu`} />
      <Switch>
        <Route path={`${ROUTE}/config/:key`}>
          <Config />
        </Route>
      </Switch>
    </Route>

    <Route key="settings" path={`${ROUTE}/settings`}>
      <Settings />
    </Route>

  </Switch>
);
