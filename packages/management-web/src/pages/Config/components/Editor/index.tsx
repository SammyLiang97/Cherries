import React, { FC, useEffect, useState } from 'react';
import * as monaco from 'monaco-editor';

import styles from './style.less';

type Props = {
  scope: string;
  value?: string;
}

const EDITOR_ID = 'editor';

const Editor: FC<Props> = ({ scope, value = '' }) => {
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    const e = monaco.editor.create(document.getElementById(EDITOR_ID) as HTMLDivElement, {
      value: `//${scope}` + value,
      language: 'json',
      lineNumbers: 'on',
      scrollBeyondLastLine: false,
      automaticLayout: true,
      contextmenu: false,
      minimap: {
        enabled: false,
      },
    });
    setEditor(e);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    editor?.setValue(`//${scope} config` + value);
  }, [editor, scope, value])

  return (
    <div id={EDITOR_ID} className={styles.editor}></div>
  );
};

export default Editor;
