'use client';

import { useState } from 'react';
import Editor from '@monaco-editor/react';
import Axios from 'axios';

import ProblemInfo from '../../../components/main/ide/problemInfo';

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
      <div className="flex flex-row pl-[15px] pr-[15px]">
        <div className="flex flex-col w-[40vw] h-[90vh] border-2 border-black rounded-2xl mr-[10px]">
          <div className="p-[20px]">
            <ProblemInfo />
          </div>
        </div>
        <div className="flex flex-col w-[60vw]">
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
          <div className="flex flex-row justify-end items-center h-[45px]">
            <button
              onClick={compile}
              className="border-2 border-black h-[30px] w-[50px] rounded-xl"
            >
              Run
            </button>
            <button className="border-2 border-black h-[30px] w-[80px] rounded-xl ml-[10px]">
              Submit
            </button>
          </div>
          <div className="flex flex-row">
            <div className="h-[35.5vh] w-[50%] mr-[7.5px] border-2 border-black rounded-2xl">
              <div className="p-[10px]">
                <h4>Input: </h4>
                <textarea
                  className="h-[30vh] w-[100%]"
                  onChange={(e) => setUserInput(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="h-[35.5vh] w-[50%] ml-[7.5px] border-2 border-black rounded-2xl">
              <div className="p-[10px]">
                <h4>Output: </h4>
                <div>
                  <pre>{userOutput}</pre>
                </div>
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
