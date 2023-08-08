'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { axiosInstance } from '@/api/axiosSetting';
import Axios, { AxiosResponse } from 'axios';
import Header from '@/components/ide/header';
import ProblemInfo from '@/components/ide/problemInfo';
import CustomEditor from '@/components/ide/customEditor';

import { useQuery } from 'react-query';

import Lottie from 'react-lottie-player';

import Loading from '@/assets/lottiefiles/loading.json';

interface TestDataType {
  testId: number;
  bojProblemIds: number[];
  remainingTime: number;
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
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const testDataAxios: () => Promise<TestDataType> = async () => {
    const response = await axiosInstance.post<TestDataType>(
      `/tests`,
      { testTypeId: testId },
      { withCredentials: true },
    );
    setTime(response.data.remainingTime);
    return response.data;
  };

  const testProblemsAxios: (
    data: TestDataType,
  ) => Promise<BojProblemInfoType>[] = (data) =>
    data.bojProblemIds.map(async (bojProblem: number, idx: number) => {
      const response = await Axios.get<BojProblemInfoType>(
        `https://t4wkqz0tz2.execute-api.ap-northeast-2.amazonaws.com/prod/problems/${bojProblem}`,
      );
      console.log(response);
      return response.data;
    });

  const { error, data: testData } = useQuery<TestDataType>(
    'problems',
    testDataAxios,
    {
      onError: (err) => {
        console.log(err);
      },
      onSuccess: async (testDataResponse) => {
        const responses = await Promise.all(
          testProblemsAxios(testDataResponse),
        );
        setTestProblems(responses);
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
          <div>
            <Header
              problemId={problemId}
              setProblemId={setProblemId}
              problemInfo={testProblems}
              time={time}
              exitInfo={{ testId: testData!.testId, testTypeId: testId! }}
            />
            <div className="flex flex-row px-[2rem]">
              <ProblemInfo
                problemId={problemId}
                problemInfo={testProblems[problemId - 1]}
              />
              <CustomEditor
                problemBojId={testData?.bojProblemIds[problemId - 1]}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
