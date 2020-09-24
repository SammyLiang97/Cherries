import React, { FC, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { Button } from 'antd';
import isJSON from 'validator/lib/isJSON';


import styles from './style.less';
import SideMenu from './components/SideMenu';
import Editor, { EditorRef } from './components/Editor';
import { Dispatch, RootState } from '../../store';


const Config: FC = () => {
  const params = useParams<{ key: string }>();
  const editorRef = useRef<EditorRef>(null);
  const dispatch = useDispatch<Dispatch>();

  const { key } = params;

  const configData = useSelector<RootState, RootState['config']['configData']>((state) => state.config.configData);

  const editorValue = get(configData, `${key}.value`, {});
  const version = get(configData, `${key}.version`);

  const handleClick = () => {
    if (editorRef.current) {
      const data = editorRef.current.getValue();

      if (isJSON(data as string)) {
        dispatch.config.updateConfigDataByKey({
          key,
          data: data as string
        });
      }
    }
  };

  console.log(configData);

  return (
    <SideMenu config={configData['management-web-side-menu'] as Config.ManagementWeb.SideMenuData}>
      Config Page: {key} | Current Version: {version}
      <br />
      <div className={styles.container}>
        <Editor value={JSON.stringify(editorValue, null, 2)} ref={editorRef} />
        <div>
          <Button type="primary" onClick={handleClick}>Submit</Button>
        </div>
      </div>
    </SideMenu>
  )
};

export default Config;
