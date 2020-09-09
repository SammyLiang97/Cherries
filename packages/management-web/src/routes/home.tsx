import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default (
  <Route key="home" path="/" exact>
    <Redirect exact from="/" to="/dashboard" />
  </Route>
);
