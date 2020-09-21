import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const Settings: FC = () => {
  const params = useParams();

  console.log(params);
  return (
    <>
      Settings Page
    </>
  )
};

export default Settings;
