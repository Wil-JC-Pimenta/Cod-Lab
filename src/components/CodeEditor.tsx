
import React from 'react';
import Editor from '@monaco-editor/react';
import { Challenge } from '../types/challenge';
import { useChallenges } from '../contexts/ChallengeContext';

interface CodeEditorProps {
  challenge: Challenge;
  onChange: (value: string | undefined) => void;
  code: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ challenge, onChange, code }) => {
  const handleEditorChange = (value: string | undefined) => {
    onChange(value);
  };

  return (
    <div className="h-[500px] border border-border rounded-lg overflow-hidden">
      <Editor
        height="100%"
        defaultLanguage="typescript"
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          padding: { top: 10 },
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
