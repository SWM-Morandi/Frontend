'use client';

import { axiosInstance } from '@/api/axiosSetting';
import Editor, { loader } from '@monaco-editor/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import Lottie from 'react-lottie-player';
import Loading from '@/assets/lottiefiles/loading.json';
import Gap from '@/utils/gap';

const languages = [
  { value: 'cpp', label: 'C++' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
];

interface ProblemInfoType {
  problem_title: string;
  problem_description: string;
  problem_input: string;
  problem_output: string;
  input_sample: Array<string>;
  output_sample: Array<string>;
}

export default function CustomEditor({
  problemBojId,
  problemInfo,
}: {
  problemBojId?: number;
  problemInfo: ProblemInfoType;
}) {
  const [userInput, setUserInput] = useState('');
  const [userFontSize, setUserFontSize] = useState(16); // 추후에 폰트 사이즈 조절 기능 추가
  const [isLoading, setIsLoading] = useState(false);
  const [userCode, setUserCode] = useState(defaultValues.cpp);
  const [userLang, setUserLang] = useState('cpp');
  const [axiosLang, setAxiosLang] = useState('Cpp'); // axios 요청 시 사용할 언어
  const [userOutput, setUserOutput] = useState<string>('');
  const [flag, setFlag] = useState(false);
  const [defaultValue, setDefualtValue] = useState(defaultValues.cpp);
  const [executeTime, setExecuteTime] = useState(0);

  const options = {
    fontSize: userFontSize,
  };

  const compile = () => {
    setFlag(true);
    setIsLoading(true);
    if (userCode === '') {
      return;
    }
    console.log(userCode);
    axiosInstance
      .post(
        '/tests/output',
        {
          language: axiosLang,
          code: userCode,
          input: userInput,
        },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res.data.output);
        setUserOutput(res.data.output);
        setExecuteTime(res.data.runTime);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sampleCompile = async () => {
    if (userCode === '') {
      return;
    }
    console.log(userCode);
    const output = await axiosInstance.post(
      '/tests/tc-output',
      {
        language: axiosLang,
        code: userCode,
        input: problemInfo.input_sample,
        output: problemInfo.output_sample,
      },
      { withCredentials: true },
    );
    console.log(output);
    return output.data;
  };

  const samplesCompile = async () => {
    setFlag(true);
    setIsLoading(true);
    let samplesCompileOutput: string = '';

    const temp = await sampleCompile();
    console.log(temp);
    for (let idx = 0; idx < temp.length; idx++) {
      samplesCompileOutput = samplesCompileOutput.concat(
        idx +
          1 +
          '번 출력 결과\n' +
          temp[idx].result +
          ' ' +
          temp[idx].output +
          ' ' +
          temp[idx].executeTime +
          '\n\n',
      );
    }
    // samplesCompileOutput = samplesCompileOutput.concat(
    //   idx + 1 + '번 출력 결과\n' + temp + '\n\n',
    // );

    // for (let idx = 0; idx < problemInfo.input_sample.length; idx++) {
    //   const input = problemInfo.input_sample[idx];
    //   const temp = await sampleCompile(input);
    //   samplesCompileOutput = samplesCompileOutput.concat(
    //     idx + 1 + '번 출력 결과\n' + temp + '\n\n',
    //   );
    // }

    setUserOutput(samplesCompileOutput);
    setIsLoading(false);
  };

  const clearOutput = () => {
    setUserOutput('');
  };

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme('myTheme', theme);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col w-[60vw]">
        <select
          className="w-[5rem] ml-[0.5rem] mb-[0.5rem] bg-gray-900"
          onChange={(e) => {
            console.log(e.target.value);
            setUserLang(e.target.value);
            if (e.target.value === 'cpp') {
              setAxiosLang('Cpp');
              setDefualtValue(defaultValues.cpp);
              setUserCode(defaultValues.cpp);
            }
            if (e.target.value === 'python') {
              setAxiosLang('Python');
              setDefualtValue(defaultValues.python);
              setUserCode(defaultValues.python);
            }
            if (e.target.value === 'java') {
              setAxiosLang('Java');
              setDefualtValue(defaultValues.java);
              setUserCode(defaultValues.java);
            }
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
            // defaultValue={defaultValue}
            value={defaultValue}
            onChange={(value) => {
              if (typeof value === 'string') {
                setUserCode(value);
              }
            }}
          />
        </div>

        <div className="flex flex-row ml-[0.5rem] mt-[1rem] mb-[0.5rem]">
          <button
            onClick={() => {
              setFlag(false);
            }}
            style={{
              color: flag ? '#FFFFFF' : '#12AC79',
            }}
          >
            Input
          </button>
          <Gap wSize="0.5rem" />
          <button
            onClick={() => {
              setFlag(true);
            }}
            style={{
              color: flag ? '#12AC79' : '#FFFFFF',
            }}
          >
            Output
          </button>
          {/* <Gap wSize="70%" />
          <div>실행시간 : {executeTime}s</div> */}
        </div>
        <div className="h-[24vh] w-full mb-[1rem] bg-[#2E3642] p-[1rem] rounded-xl overflow-y-auto overflow-x-hidden">
          {flag ? (
            isLoading ? (
              <div className="flex justify-center items-center w-[100%] h-[100%] ">
                <Lottie
                  loop
                  animationData={Loading}
                  play
                  className="w-[15rem]"
                />
              </div>
            ) : (
              <div className="whitespace-pre-wrap w-full break-all ">
                {userOutput}
              </div>
            )
          ) : (
            <textarea
              id="code-inp"
              onChange={(e) => setUserInput(e.target.value)}
              className="bg-[#2E3642] w-full h-[97%] text-white focus:outline-0"
            ></textarea>
          )}
        </div>
        <div className="flex flex-row justify-end items-center">
          <Link
            href={`https://www.acmicpc.net/submit/${problemBojId}`}
            target="_blank"
          >
            <button className="h-[2rem] w-[6rem] bg-[#12AC79] rounded-xl">
              Submit
            </button>
          </Link>
          <div className="w-[1rem]" />
          <button
            onClick={compile}
            className="h-[2rem] w-[6rem] border-2 border-white rounded-xl"
          >
            Run
          </button>
          <div className="w-[1rem]" />
          <button
            onClick={samplesCompile}
            className="h-[2rem] w-[6rem] border-2 border-white rounded-xl"
          >
            예제 컴파일
          </button>
        </div>
      </div>
    </>
  );
}

const defaultValues = {
  cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cout << "Hello World!";
  
  return 0;
}
`,
  python: `print("Hello World!")
`,
  java: `import java.util.*;
import java.lang.*;
import java.io.*;

class Main
{
	public static void main (String[] args)
	{
		System.out.println("Hello World!");
	}
}`,
};

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
