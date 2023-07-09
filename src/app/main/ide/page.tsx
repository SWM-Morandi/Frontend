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
      <div className="flex flex-row pl-[15px] pr-[15px]">
        <div className="flex flex-col w-[40vw] h-[90vh] border-2 border-black rounded-2xl mr-[10px]">
          <div className="p-[20px]">
            <div className="text-[30px]">문제 이름</div>
            <div className="mt-[20px]" />
            <div className="text-[20px]">문제</div>
            <div className="mt-[10px]" />
            <div>
              재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27,
              ...)이라고 할 때, 크기 N의 패턴은 N×N 정사각형 모양이다. 크기 3의
              패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에 별이 하나씩
              있는 패턴이다.
            </div>
            <div>
              N이 3보다 클 경우, 크기 N의 패턴은 공백으로 채워진 가운데의
              (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태이다. 예를
              들어 크기 27의 패턴은 예제 출력 1과 같다.
            </div>
            <div className="mt-[20px]" />
            <div className="text-[20px]">입력</div>
            <div className="mt-[10px]" />
            <div>
              첫째 줄에 N이 주어진다. N은 3의 거듭제곱이다. 즉 어떤 정수 k에
              대해 N=3k이며, 이때 1 ≤ k ≤ 8이다.
            </div>
            <div className="mt-[20px]" />
            <div className="text-[20px]">출력</div>
            <div className="mt-[10px]" />
            <div>첫째 줄부터 N번째 줄까지 별을 출력한다.</div>
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
