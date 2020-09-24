import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get } from 'lodash';

import styles from './style.less';
import SideMenu from './components/SideMenu';
import { Button } from 'antd';
import Editor from './components/Editor';
import { RootState } from '../../store';


const Config: FC = () => {
  const params = useParams<{ configItem: string }>();

  const { configItem } = params;

  const configData = useSelector<RootState, RootState['config']['configData']>((state) => state.config.configData);

  const editorValue = get(configData, `${configItem}.value`, {});
  const version = get(configData, `${configItem}.version`);

  return (
    <SideMenu>
      Config Page: {configItem} | Current Version: {version}
      <br />
      <div className={styles.container}>
        <Editor scope={configItem} value={JSON.stringify(editorValue, null, 2)} />
        <div>
          <Button type="primary">Submit</Button>
        </div>
      </div>
    </SideMenu>
  )
};

export default Config;
