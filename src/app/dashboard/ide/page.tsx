'use client';

import { useState, useEffect } from 'react';
import Editor, { loader } from '@monaco-editor/react';

import Axios from 'axios';
import Link from 'next/link';

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

  const languages = [
    { value: 'cpp', label: 'C++' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
  ];

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
      monaco.editor.defineTheme('myTheme', {
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
      });
    });
  }, []);

  const [sideProblemsBar, setSideProblemsBar] = useState(false);

  return (
    <>
      {sideProblemsBar && (
        <div className="flex flex-col w-[22rem] h-[100vh] absolute z-10 bg-white">
          <div className="flex flex-row justify-between px-[1.5rem] my-[2rem]">
            <div className="text-[20px]">Problem Set</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.021 512.021"
              width="20"
              className="cursor-pointer"
              onClick={() => setSideProblemsBar(!sideProblemsBar)}
            >
              <g>
                <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z" />
              </g>
            </svg>
          </div>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <>
                <div className="flex flex-row justify-between px-[1.5rem] py-[0.8rem]">
                  <div className="flex flex-row mr-[2rem]">
                    <div className="mr-[1rem]">{i + 1}</div>
                    <div>문제 타이틀을 넣어주세요.</div>
                  </div>
                  {i % 2 === 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 507.506 507.506"
                      width="20"
                      fill="#F04452"
                    >
                      <g>
                        <path d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z" />
                      </g>
                    </svg>
                  )}
                </div>
              </>
            ))}
        </div>
      )}

      <div className="bg-gray-900 text-white h-[100vh]">
        <div className="flex flex-row justify-between items-center h-[4rem] w-[100%] px-[2rem]">
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={() => setSideProblemsBar(!sideProblemsBar)}
              className="cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <div className="text-[22px] ml-[0.5rem]">모랜디</div>
          </div>
          <div>00:41:57</div>
          <Link href="/dashboard/done">
            <div className="bg-[#F04452] px-[1rem] py-[0.5rem] rounded-xl">
              종료하기
            </div>
          </Link>
        </div>

        <div className="flex flex-row mx-[2rem]">
          <div className="flex flex-col w-[40vw] h-[90vh] mr-[1rem] bg-[#2E3642] rounded-2xl overflow-auto">
            <div className="p-[1.5rem]">
              <div className="text-[20px] mb-[1rem]">
                문제 명 패턴에 따른 별 출력
              </div>
              <hr className="text-gray-700"></hr>
              <div className="text-[18px] my-[1rem]">문제</div>
              <div className="bg-gray-900 p-[1rem] rounded-xl">
                <div>
                  재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27,
                  ...)이라고 할 때, 크기 N의 패턴은 N×N 정사각형 모양이다. 크기
                  3의 패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에
                  별이 하나씩 있는 패턴이다.
                </div>
                <br />
                <div>***</div>
                <div>* *</div>
                <div>***</div>
                <br />
                <div>
                  N이 3보다 클 경우, 크기 N의 패턴은 공백으로 채워진 가운데의
                  (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태이다.
                  예를 들어 크기 27의 패턴은 예제 출력 1과 같다.
                </div>
              </div>
              <div className="text-[20px] my-[1rem]">입력</div>
              <div className="bg-gray-900 p-[1rem] rounded-xl">
                <div>
                  첫째 줄에 N이 주어진다. N은 3의 거듭제곱이다. 즉 어떤 정수 k에
                  대해 N=3k이며, 이때 1 ≤ k ≤ 8이다.
                </div>
              </div>
              <div className="text-[20px] my-[1rem]">출력</div>
              <div className="bg-gray-900 p-[1rem] rounded-xl">
                <div>첫째 줄부터 N번째 줄까지 별을 출력한다.</div>
              </div>
              <div className="flex flex-row justify-between my-[1rem]">
                <div className="flex flex-col w-[48%]">
                  <div className="mb-[1rem]">예제 입력</div>
                  <div className="bg-gray-900 h-[10rem] w-[100%] p-[1rem] rounded-xl">
                    3
                  </div>
                </div>
                <div className="flex flex-col w-[48%]">
                  <div className="mb-[1rem]">예제 출력</div>
                  <div className="bg-gray-900 h-[10rem] w-[100%] p-[1rem] rounded-xl">
                    ***
                    <br />
                    * *
                    <br />
                    ***
                  </div>
                </div>
              </div>
            </div>
          </div>
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
