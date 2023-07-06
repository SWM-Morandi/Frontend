'use client';

import { useState } from 'react';
import Editor from '@monaco-editor/react';
import Axios from 'axios';

export default function IDE() {
  const [userCode, setUserCode] = useState('');
  const [userLang, setUserLang] = useState('cpp');
  const [userTheme, setUserTheme] = useState('vs-dark');
  const [userFontSize, setUserFontSize] = useState(14);
  const [userInput, setUserInput] = useState('');
  const [userOutput, setUserOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const options = {
    fontSize: userFontSize,
  };

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

  return (
    <>
      <div className="flex flex-row p-[15px]">
        <div className="w-[50vw] h-[100vh] bg-slate-300 mr-[10px]"></div>
        <div className="flex flex-col w-[50vw]">
          <Editor
            options={options}
            height="50vh"
            width="100%"
            theme={userTheme}
            language={userLang}
            defaultLanguage="cpp"
            defaultValue={defaultValue}
            onChange={(value) => {
              if (typeof value === 'string') {
                setUserCode(value);
              }
            }}
          />
          <div>
            <button onClick={compile}>Run</button>
            <button>Submit</button>
          </div>
          <div className="flex flex-row">
            <div className="h-[50vh] w-[50%] bg-slate-300 mr-[7.5px]">
              <h4>Input: </h4>
              <textarea
                className="bg-slate-300 h-[95%] w-[100%]"
                onChange={(e) => setUserInput(e.target.value)}
              ></textarea>
            </div>
            <div className="h-[50vh] w-[50%] bg-slate-300 ml-[7.5px]">
              <h4>Output: </h4>
              <div>
                <pre>{userOutput}</pre>
              </div>
            </div>
          </div>
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
