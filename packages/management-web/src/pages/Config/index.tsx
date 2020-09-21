import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import SideMenu from './components/SideMenu';

const Config: FC = () => {
  const params = useParams<{ configItem: string }>();

  console.log(params);
  const { configItem } = params;
  return (
    <SideMenu>
      Config Page: {configItem}
    </SideMenu>
  )
};

export default Config;
