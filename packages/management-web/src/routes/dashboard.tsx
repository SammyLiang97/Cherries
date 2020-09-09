import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const ROUTE = '/dashboard';

const Dashboard = lazy(() => import('../pages/Dashboard'));

export default (
  <Route key="dashboard" path={ROUTE}>
    <Dashboard />
  </Route>
)