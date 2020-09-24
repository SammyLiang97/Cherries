import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import * as monaco from 'monaco-editor';

import styles from './style.less';

export type EditorRef = { getValue: () => string | undefined };

type Ref = React.Ref<{ getValue: () => string | undefined }>;

type Props = {
  value?: string;
  ref: Ref;
}

const EDITOR_ID = 'editor';

const Editor = (props: Props, ref: Ref) => {
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return editor?.getValue();
    }
  }));

  useEffect(() => {
    const e = monaco.editor.create(document.getElementById(EDITOR_ID) as HTMLDivElement, {
      value: props.value,
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
    editor?.setValue(props.value as string);
  }, [editor, props.value]);

  return (
    <div id={EDITOR_ID} className={styles.editor}></div>
  );
};

export default forwardRef(Editor) as typeof Editor;
