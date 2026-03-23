import React, { useEffect, useRef } from 'react';
import { MonacoEditor } from 'react-monaco-editor';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';

const Editor = () => {
  const editorRef = useRef(null);
  const ydoc = new Y.Doc();
  const provider = new WebrtcProvider('your-room-name', ydoc);
  const yText = ydoc.getText('monaco');

  useEffect(() => {
    if (editorRef.current) {
      // Using a Yjs binding to bind the Yjs text type to the Monaco editor
      yText.observe(() => {
        // This will be called whenever the Yjs document changes
        editorRef.current.setValue(yText.toString());
      });
    }

    return () => {
      provider.destroy();
      ydoc.destroy();
    };
  }, []);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.setModel(YTextBinding.getEditorModel(yText));
  };

  return (
    <MonacoEditor
      width="800"
      height="600"
      language="javascript"
      theme="vs-dark"
      onEditorDidMount={handleEditorDidMount}
      options={{
        selectOnLineNumbers: true,
        automaticLayout: true,
      }}
    />
  );
};

export default Editor;