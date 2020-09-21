import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as monaco from 'monaco-editor';

import styles from './style.less';
import SideMenu from './components/SideMenu';
import { Button } from 'antd';

const EDITOR_ID = 'editor';

const Config: FC = () => {
  const params = useParams<{ configItem: string }>();

  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);

  const { configItem } = params;


  useEffect(() => {
    const editor = monaco.editor.create(document.getElementById(EDITOR_ID) as HTMLDivElement, {
      value: '',
      language: 'json',
      lineNumbers: 'on',
      scrollBeyondLastLine: false,
      automaticLayout: true,
      contextmenu: false,
      minimap: {
        enabled: false,
      },
    });

    setEditor(editor);
  }, []);

  return (
    <SideMenu>
      Config Page: {configItem}
      <br />
      <div className={styles.container}>
        <div id={EDITOR_ID} className={styles.editor}></div>
        <div>
          <Button type="primary">Submit</Button>
        </div>
      </div>
    </SideMenu>
  )
};

export default Config;
