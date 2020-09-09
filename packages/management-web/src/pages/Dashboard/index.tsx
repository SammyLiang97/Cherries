import React, { FC } from 'react';
import { Button } from 'antd';

import styles from './style.less';

const Dashboard: FC = () => {
  return (
    <>
      <Button>Hello World</Button>
      <br />
      <span className={styles.test}>Less Style Test</span>
    </>
  );
}

export default Dashboard;
