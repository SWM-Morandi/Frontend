'use client';

import Link from 'next/link';
import TestResultBox from '@/components/codingtest/testResultBox';
import Gap from '@/utils/gap';
import { useSearchParams } from 'next/navigation';
import { axiosInstance } from '@/api/axiosSetting';
import { useQuery } from 'react-query';
import { useState } from 'react';

import Lottie from 'react-lottie-player';

import Loading from '@/assets/lottiefiles/loading.json';

function Button({ text }: { text: string }) {
  return (
    <Link
      href="/dashboard"
      className="flex justify-center items-center h-[3rem] w-[30rem] bg-[#F04452] rounded-2xl text-white cursor-pointer"
    >
      {text}
    </Link>
  );
}

interface TestResult {
  bojProblemId: number;
  testProblemId: number;
  executionTime: number;
  isSolved: boolean;
}

interface TestResultAxiosType {
  testDate: string | undefined;
  beforeRating: number | undefined;
  afterRating: number | undefined;
  attemptProblemDtos: TestResult[] | undefined;
}

export default function CodingTestBeforePage() {
  const router = useSearchParams();
  const testId = router.get('testId');
  const testTypeId = router.get('testTypeId');

  const [testResults, setTestResults] = useState<TestResultAxiosType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBojIdAxios: () => Promise<{
    nickname: string;
    bojId: string;
  }> = async () => {
    const response = await axiosInstance.get<{
      nickname: string;
      bojId: string;
    }>('/members/info', {
      withCredentials: true,
    });
    return response.data;
  };

  const testResultAxios: () => Promise<TestResultAxiosType> = async () => {
    const res = await axiosInstance.get<TestResultAxiosType>('/tests/result', {
      withCredentials: true,
    });
    return res.data;
  };

  const { error, data } = useQuery('testResult', getBojIdAxios, {
    onError: (err) => {
      console.log(err);
    },
    onSuccess: async (dataResponse) => {
      const response = await testResultAxios();
      setTestResults(response);
      setIsLoading(false);
    },
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-[#191F28]">
        {isLoading ? (
          <div className="flex w-screen h-screen items-center justify-center">
            <Lottie loop animationData={Loading} play className="w-[25rem]" />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[25rem] w-[80vw] bg-white rounded-2xl">
            {/* 시험 결과 제목 */}
            <div className="text-[2rem] font-bold">시험 결과</div>
            <Gap hSize="1rem" />

            {/* 시험 결과 정보 테이블 */}
            <TestResultBox
              bojId={data?.bojId}
              testResults={testResults?.attemptProblemDtos}
              beforeRating={testResults?.beforeRating}
              afterRating={testResults?.afterRating}
            />
            <Gap hSize="3rem" />

            {/* 종료하기 버튼 */}
            <Button text="종료하기" />
          </div>
        )}
      </div>
    </>
  );
}
