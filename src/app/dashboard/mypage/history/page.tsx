'use client';

import { Table, Pagination } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { axiosInstance } from '@/api/axiosSetting';
import Header from '@/components/dashboard/header';
import Footer from '@/components/dashboard/footer';
import HistoryTable from '@/components/mypage/historyTable';

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
  totalPage: number;
  testRecordDtos: TestHistoryInfoType[];
}

export default function History() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(500);

  const testHistoryInfoAxios: () => Promise<TestHistoryInfoAxiosType> =
    async () => {
      const response = await axiosInstance.get<TestHistoryInfoAxiosType>(
        `/test-types/latest?page=${currentPage}&size=10`,
        { withCredentials: true },
      );
      console.log('axios 호출');
      console.log(response);
      return response.data;
    };

  const { isLoading, error, data, refetch } =
    useQuery<TestHistoryInfoAxiosType>(
      'testHistoryInfoData',
      testHistoryInfoAxios,
    );

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center my-8">
        <div className="flex flex-col justify-center items-center h-[23vh] w-[94vw] rounded-xl mb-8 bg-gradient-to-r from-[#FFD459] to-[#FF5F84]">
          <h1 className="text-[2.5rem] font-bold">코딩테스트 기록</h1>
        </div>
        <HistoryTable isLoading={isLoading} testHistoryInfoAxios={data} />
        <Pagination
          current={currentPage}
          total={data?.totalPage}
          showSizeChanger={false}
          onChange={async (page) => {
            await setCurrentPage(page);
            refetch();
          }}
        />
      </div>
      <Footer />
    </>
  );
}
