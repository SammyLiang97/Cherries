import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import styles from './style.less';
import SideMenu from './components/SideMenu';
import { Button } from 'antd';
import Editor from './components/Editor';


const Config: FC = () => {
  const params = useParams<{ configItem: string }>();

  const { configItem } = params;

  return (
    <SideMenu>
      Config Page: {configItem}
      <br />
      <div className={styles.container}>
        <Editor scope={configItem} />
        <div>
          <Button type="primary">Submit</Button>
        </div>
      </div>
    </SideMenu>
  )
};

export default Config;
