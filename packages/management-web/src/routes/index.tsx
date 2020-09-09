import React, { FC, Suspense } from 'react';
import home from './home';
import dashboard from './dashboard';

const Routes: FC = () => {
  const routeList = [home, dashboard];

  return (
    <Suspense fallback={<>Loading...</>}>
      {routeList}
    </Suspense>
  )
};

export default Routes;
