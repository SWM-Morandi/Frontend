'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { axiosInstance } from '@/api/axiosSetting';
import Axios from 'axios';
import Header from '@/components/ide/header';
import ProblemInfo from '@/components/ide/problemInfo';
import CustomEditor from '@/components/ide/customEditor';

interface BojProblem {
  testProblemId: number;
  problemId: number;
  level: number;
  levelToString: string;
}

interface BojProblemInfoType {
  problem_title: string;
  problem_description: string;
  problem_input: string;
  problem_output: string;
  input_sample: Array<string>;
  output_sample: Array<string>;
}

export default function IDE() {
  const router = useSearchParams();
  const testId = router.get('testId');

  const [data, setData] = useState<Array<BojProblem>>();
  const [problems, setProblems] = useState<BojProblemInfoType[]>([
    {
      problem_title: 'A+B',
      problem_description:
        '<p>두 정수 A와 B를 입력받은 다음,&nbsp;A+B를 출력하는 프로그램을 작성하시오.</p>',
      problem_input: '<p>첫째 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10)</p>',
      problem_output: '<p>첫째 줄에 A+B를 출력한다.</p>',
      input_sample: ['1 2'],
      output_sample: ['3'],
    },
  ]);
  const [problemId, setProblemId] = useState(1);

  useEffect(() => {
    axiosInstance
      .post(`/tests`, { testTypeId: testId }, { withCredentials: true })
      .then((res) => {
        setData(res.data.bojProblems);
        console.log(res.data.bojProblems);
        return res.data.bojProblems;
      })
      .then((res) => {
        const newProblems: BojProblemInfoType[] = [];
        console.log('두번째 res');
        console.log(res);
        res.map((problem: BojProblem, idx: number) => {
          Axios.get(
            `https://t4wkqz0tz2.execute-api.ap-northeast-2.amazonaws.com/prod/problems/${problem.problemId}`,
          ).then((res) => {
            console.log(problem.problemId);
            console.log(res);
            // if (problems[0].problem_title === 'A+B') {
            //   console.log('시발 ');
            //   setProblems((problems) => [res.data]);
            // } else {
            setProblems((problems) => [...problems, res.data]);
            // }
          });
        });
        // setProblems(
        //   problems.filter((problem) => problem.problem_title !== 'A+B - 1000'),
        // );
        console.log('problems');
        console.log(problems);
        //setProblems(newProblems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [time, setTime] = useState(7200); // 남은 시간 (단위: 초)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="bg-gray-900 text-white h-[100vh]">
        <Header
          problemId={problemId}
          setProblemId={setProblemId}
          problemInfo={problems}
          time={time}
        />
        <div className="flex flex-row px-[2rem]">
          <ProblemInfo
            problemId={problemId}
            problemInfo={problems[problemId - 1]}
          />
          <CustomEditor />
        </div>
      </div>
    </>
  );
}
