'use client';

import Axios from 'axios';
import Editor, { loader } from '@monaco-editor/react';
import { useState, useEffect } from 'react';

export default function CustomEditor() {
  const compile = () => {
    setLoading(true);
    if (userCode === '') {
      return;
    }

    console.log(userCode);

    Axios.post('http://localhost:5000/compile', {
      code: userCode,
      lang: userLang,
      input: userInput,
    }).then((res) => {
      setUserOutput(res.data.output);
      setLoading(false);
    });
  };

  const clearOutput = () => {
    setUserOutput('');
  };

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme('myTheme', theme);
    });
  }, []);

  const [userInput, setUserInput] = useState('');
  const [userFontSize, setUserFontSize] = useState(14); // 추후에 폰트 사이즈 조절 기능 추가
  const [loading, setLoading] = useState(false);
  const [userCode, setUserCode] = useState('');
  const [userLang, setUserLang] = useState('cpp');
  const languages = [
    { value: 'cpp', label: 'C++' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
  ];
  const [userOutput, setUserOutput] = useState('');

  const options = {
    fontSize: userFontSize,
  };

  return (
    <>
      <div className="flex flex-col w-[60vw]">
        <select
          className="w-[5rem] ml-[0.5rem] mb-[0.5rem] bg-gray-900"
          onChange={(e) => {
            setUserLang(e.target.value);
          }}
        >
          {languages.map((lang) => (
            <option value={lang.value} key={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
        <div className="flex flex-col justify-center h-[52vh] w-[100%] bg-[#2E3642] rounded-xl">
          <Editor
            options={options}
            height="50vh"
            width="100%"
            theme="myTheme"
            language={userLang}
            defaultValue={defaultValue}
            onChange={(value) => {
              if (typeof value === 'string') {
                setUserCode(value);
              }
            }}
          />
        </div>

        <div className="flex flex-row justify-between w-[8rem] ml-[0.5rem] mt-[1rem] mb-[0.5rem]">
          <button>Testcase</button>
          <button>Result</button>
        </div>
        <div className="h-[24vh] w-[100%] mb-[1rem] bg-[#2E3642] rounded-xl"></div>
        <div className="flex flex-row justify-end items-center">
          <button className="h-[2rem] w-[6rem] bg-[#12AC79] rounded-xl">
            Submit
          </button>
          <div className="w-[1rem]" />
          <button
            onClick={compile}
            className="h-[2rem] w-[6rem] border-2 border-white rounded-xl"
          >
            Run
          </button>
        </div>
      </div>
    </>
  );
}

const defaultValue = `#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  
  return 0;
}
`;

const theme: any = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    {
      background: '272822',
      token: '',
    },
    {
      foreground: '75715e',
      token: 'comment',
    },
    {
      foreground: 'e6db74',
      token: 'string',
    },
    {
      foreground: 'ae81ff',
      token: 'constant.numeric',
    },
    {
      foreground: 'ae81ff',
      token: 'constant.language',
    },
    {
      foreground: 'ae81ff',
      token: 'constant.character',
    },
    {
      foreground: 'ae81ff',
      token: 'constant.other',
    },
    {
      foreground: 'f92672',
      token: 'keyword',
    },
    {
      foreground: 'f92672',
      token: 'storage',
    },
    {
      foreground: '66d9ef',
      fontStyle: 'italic',
      token: 'storage.type',
    },
    {
      foreground: 'a6e22e',
      fontStyle: 'underline',
      token: 'entity.name.class',
    },
    {
      foreground: 'a6e22e',
      fontStyle: 'italic underline',
      token: 'entity.other.inherited-class',
    },
    {
      foreground: 'a6e22e',
      token: 'entity.name.function',
    },
    {
      foreground: 'fd971f',
      fontStyle: 'italic',
      token: 'variable.parameter',
    },
    {
      foreground: 'f92672',
      token: 'entity.name.tag',
    },
    {
      foreground: 'a6e22e',
      token: 'entity.other.attribute-name',
    },
    {
      foreground: '66d9ef',
      token: 'support.function',
    },
    {
      foreground: '66d9ef',
      token: 'support.constant',
    },
    {
      foreground: '66d9ef',
      fontStyle: 'italic',
      token: 'support.type',
    },
    {
      foreground: '66d9ef',
      fontStyle: 'italic',
      token: 'support.class',
    },
    {
      foreground: 'f8f8f0',
      background: 'f92672',
      token: 'invalid',
    },
    {
      foreground: 'f8f8f0',
      background: 'ae81ff',
      token: 'invalid.deprecated',
    },
    {
      foreground: 'cfcfc2',
      token: 'meta.structure.dictionary.json string.quoted.double.json',
    },
    {
      foreground: '75715e',
      token: 'meta.diff',
    },
    {
      foreground: '75715e',
      token: 'meta.diff.header',
    },
    {
      foreground: 'f92672',
      token: 'markup.deleted',
    },
    {
      foreground: 'a6e22e',
      token: 'markup.inserted',
    },
    {
      foreground: 'e6db74',
      token: 'markup.changed',
    },
    {
      foreground: 'ae81ffa0',
      token: 'constant.numeric.line-number.find-in-files - match',
    },
    {
      foreground: 'e6db74',
      token: 'entity.name.filename.find-in-files',
    },
  ],
  colors: {
    'editor.foreground': '#F8F8F2',
    'editor.background': '#2E3642',
    'editor.selectionBackground': '#49483E',
    'editor.lineHighlightBackground': '#3E3D32',
    'editorCursor.foreground': '#F8F8F0',
    'editorWhitespace.foreground': '#3B3A32',
    'editorIndentGuide.activeBackground': '#9D550FB0',
    'editor.selectionHighlightBorder': '#222218',
    'minimap.background': '#2E3642',
  },
};
