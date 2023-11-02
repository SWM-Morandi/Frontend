import dayjs from 'dayjs';

import { useState } from 'react';
import TestHistoryDetailModal from '@/components/mypage/testHistoryDetailModal';

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
  acceptCount: number;
  startDifficulty: string;
  endDifficulty: string;
  testTypename: string;
  testRating: number;
  originRating: number;
  attemptProblemDto: AttemptProblemDtoType[];
}

interface TestHistoryInfoAxiosType {
  totalElements: number;
  testRecordDtos: TestHistoryInfoType[];
}

export default function HistoryTable({
  isLoading,
  testHistoryInfoAxios,
}: {
  isLoading: boolean;
  testHistoryInfoAxios?: TestHistoryInfoAxiosType;
}) {
  if (isLoading) {
    return <div className="">로딩중...</div>;
  }

  console.log(testHistoryInfoAxios);

  return (
    <table className="border rounded-2xl mb-4">
      <thead className="border">
        <tr className="text-gray-500">
          <th className="py-4 w-[16rem]">코딩테스트</th>
          <th className="py-4 w-[16rem]">시험 날짜</th>
          <th className="py-4 w-[16rem]">맞춘 문제 개수</th>
          <th className="py-4 w-[16rem]">전체 문제 개수</th>
          <th className="py-4 w-[10rem]">자세히 보기</th>
        </tr>
      </thead>
      <tbody>
        {testHistoryInfoAxios?.testRecordDtos.map((testHistoryInfo, idx) => {
          return (
            <TableRowComponent key={idx} testHistoryInfo={testHistoryInfo} />
          );
        })}
      </tbody>
    </table>
  );
}

function TableRowComponent({
  testHistoryInfo,
}: {
  testHistoryInfo: TestHistoryInfoType;
}) {
  const [testHistoryDetailModalFlag, setTestHistoryDetailModalFlag] =
    useState<boolean>(false);
  return (
    <>
      {testHistoryDetailModalFlag ? (
        <TestHistoryDetailModal
          setTestHistoryDetailModalFlag={setTestHistoryDetailModalFlag}
          testHistoryInfo={testHistoryInfo}
        />
      ) : null}
      <tr className="border">
        <td className="py-3 text-center">{testHistoryInfo.testTypename}</td>
        <td className="py-3 text-center">
          {dayjs(testHistoryInfo?.testDate).format('YYYY')}년{' '}
          {dayjs(testHistoryInfo?.testDate).format('MM')}월{' '}
          {dayjs(testHistoryInfo?.testDate).format('DD')}일{' '}
        </td>
        <td className="py-3 text-center">{testHistoryInfo.acceptCount}개</td>
        <td className="py-3 text-center">{testHistoryInfo.problemCount}개</td>
        <td className="py-3 text-center flex justify-center">
          <ArrowIcon
            onClick={() => {
              setTestHistoryDetailModalFlag(true);
            }}
          />
        </td>
      </tr>
    </>
  );
}

function ArrowIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onClick={onClick}
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
