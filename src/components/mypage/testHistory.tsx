'use client';

function ArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="#191F28" />
      <path
        d="M12.5456 6.99805L17.561 12.0106L12.6071 16.9617"
        stroke="white"
        strokeWidth="1.12821"
        strokeLinecap="square"
      />
      <path
        d="M16.8995 11.98H6.43793"
        stroke="white"
        strokeWidth="1.12821"
        strokeLinecap="square"
      />
    </svg>
  );
}

import Gap from '@/utils/gap';
import { axiosInstance } from '@/api/axiosSetting';
import { useState } from 'react';
import { useQuery } from 'react-query';

function HistoryComp({
  company,
  date,
  solvedCount,
  problemCount,
}: {
  company: string | undefined;
  date: string | undefined;
  solvedCount: number | undefined;
  problemCount: number | undefined;
}) {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-[30rem] px-[3rem] py-[1.5rem] bg-gray-100 rounded-xl">
        <div className="flex flex-col">
          <div className="text-[1.5rem] font-bold">{company} 코딩테스트</div>
          <div className="text-gray-500">{date}</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center mr-[1.5rem] bg-white px-[1rem] py-[0.5rem] rounded-xl">
            <div className="text-[1.3rem] font-bold">{solvedCount}문제</div>
            <div className="text-gray-500">총 {problemCount}문제</div>
          </div>
          <ArrowIcon />
        </div>
      </div>
    </>
  );
}

interface AttemptProblemDtoType {
  testProblemId: number;
  bojProblemId: number;
  isSolved: boolean;
  executionTime: number | null;
}

interface TestHistoryInfoType {
  testId: number;
  testDate: string;
  testTime: number;
  problemCount: number;
  startDifficulty: string;
  endDifficulty: string;
  testTypename: string;
  testRating: number;
  originRating: number;
  attemptProblemDto: AttemptProblemDtoType[];
}

export default function TestHistory() {
  const testHistoryInfoAxios: () => Promise<
    TestHistoryInfoType[]
  > = async () => {
    const response = await axiosInstance.get<TestHistoryInfoType[]>(
      `/test-types/latest`,
      { withCredentials: true },
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery<TestHistoryInfoType[]>(
    'testHistoryInfoData',
    testHistoryInfoAxios,
  );

  if (isLoading) {
    return (
      <div className="flex flex-row justify-center items-center h-[15rem] w-[70rem] rounded-xl shadow-md">
        로딩중...
      </div>
    );
  }

  if (error) {
    return <div>에러 발생</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center w-[70rem] p-[3rem] rounded-xl shadow-md">
        {/* 테스트 기록 컴포넌트 이름 */}
        <div className="flex flex-row justify-start text-[2rem] font-bold w-[63rem]">
          <div>테스트 기록</div>
        </div>
        <Gap hSize="1.5rem" />

        {/* 테스트 기록 정보 */}
        <div className="grid grid-cols-2 gap-10">
          {Array.isArray(data) ? (
            data.map((item) => (
              <HistoryComp
                company={item.testTypename}
                date={item.testDate}
                solvedCount={1}
                problemCount={item.problemCount}
              />
            ))
          ) : (
            <div>에러 발생</div>
          )}
        </div>
      </div>
    </>
  );
}
