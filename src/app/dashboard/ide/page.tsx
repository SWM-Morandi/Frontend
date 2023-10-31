'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { axiosInstance } from '@/api/axiosSetting';
import Axios, { AxiosResponse } from 'axios';
import Header from '@/components/ide/header';
import ProblemInfo from '@/components/ide/problemInfo';
import CustomEditor from '@/components/ide/customEditor';
import SideBar from '@/components/ide/sidebar2';

import { useQuery } from 'react-query';

import Lottie from 'react-lottie-player';

import Loading from '@/assets/lottiefiles/loading.json';

interface TestCodeDto {
  problemNumber: number;
  pythonCode: string;
  javaCode: string;
  cppCode: string;
}

interface BojProblemType {
  bojProblemId: number;
  isSolved: boolean;
}

interface TestDataType {
  testId: number;
  bojProblems: BojProblemType[];
  remainingTime: number;
  testCodeDtos: TestCodeDto[];
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

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [testProblems, setTestProblems] = useState<BojProblemInfoType[]>([]);
  const [problemId, setProblemId] = useState(1);
  const [time, setTime] = useState(-1);
  const [axiosTestId, setAxiosTestId] = useState<number>(-1);
  const [isSolved, setIsSolved] = useState<boolean[]>([]);

  /* 타이머 useEffect */
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    const clearTimer = () => {
      clearInterval(timer);
    };
    if (time === 0) {
      clearTimer();
      alert(
        '테스트 시간이 종료되었습니다. 종료하고 결과를 확인해주세요.\n시간 상관없이 더 풀고 싶으시다면, 더 푸셔도 괜찮습니다!',
      );
    }
    return clearTimer;
  }, [time]);

  /* 출제될 시험 문제를 받아오는 Axios */
  const testDataAxios: () => Promise<TestDataType> = async () => {
    const response = await axiosInstance.post<TestDataType>(
      `/tests`,
      { testTypeId: testId },
      { withCredentials: true },
    );
    setTime(response.data.remainingTime);
    return response.data;
  };

  /* 출제된 시험 문제의 정보를 받아오는 Axios */
  const testProblemsAxios = async (data: TestDataType) => {
    const results = [];
    for (const bojProblem of data.bojProblems) {
      try {
        const response = await Axios.get<BojProblemInfoType>(
          `https://t4wkqz0tz2.execute-api.ap-northeast-2.amazonaws.com/prod/problems/${bojProblem.bojProblemId}`,
        );

        setIsSolved((prev) => [...prev, bojProblem.isSolved]);
        console.log(response);
        results.push(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    return results;
  };

  const { error, data: testData } = useQuery<TestDataType>(
    'testProblems',
    testDataAxios,
    {
      onError: (err) => {
        console.log(err);
      },
      onSuccess: async (testDataResponse) => {
        const responses = await testProblemsAxios(testDataResponse);

        setTestProblems(responses);
        setAxiosTestId(testDataResponse.testId);
        setIsLoading(false);
      },
      staleTime: 987654321,
    },
  );

  return (
    <>
      <div className="bg-gray-900 text-white h-[100vh]">
        {isLoading ? (
          <div className="flex w-screen h-screen items-center justify-center">
            <Lottie loop animationData={Loading} play className="w-[25rem]" />
          </div>
        ) : (
          <div className="flex flex-row">
            <SideBar
              problemId={problemId}
              setProblemId={setProblemId}
              problemInfo={testProblems}
              isSolved={isSolved}
            />
            <div className="flex flex-col">
              <Header
                problemId={problemId}
                setProblemId={setProblemId}
                problemInfo={testProblems}
                time={time}
                testId={Number(testId)}
                exitInfo={{ testId: testData!.testId, testTypeId: testId! }}
                setIsLoading={setIsLoading}
              />
              <div className="flex flex-row px-[2rem]">
                <ProblemInfo
                  problemId={problemId}
                  problemInfo={testProblems[problemId - 1]}
                />
                <CustomEditor
                  testId={axiosTestId}
                  testCodeDtos={testData?.testCodeDtos}
                  problemBojId={
                    testData?.bojProblems[problemId - 1].bojProblemId
                  }
                  problemInfo={testProblems}
                  problemId={problemId}
                  setIsSolved={setIsSolved}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
