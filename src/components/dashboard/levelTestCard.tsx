'use client';

import React from 'react';
import Gap from '@/utils/gap';
import Text from '@/utils/text';

interface CodingTestCardProps {
  testTypename: string;
  problemCount: number;
  time: number;
  startLevel: string;
  endLevel: string;
}

export default function CodingTestCard({
  testTypename,
  problemCount,
  time,
  startLevel,
  endLevel,
}: CodingTestCardProps) {
  return (
    <>
      <div className="w-[23rem] my-[1rem] mr-[3rem]">
        <div className="flex flex-col justify-center items-center h-[15rem] p-[20px] shadow-md rounded-xl">
          {/* 코딩테스트 기업 로고 */}
          <Text size="1.5rem" bold="bold">
            {testTypename}
          </Text>
          <Gap hSize="3rem" />

          {/* 기업 코딩테스트 정보 */}
          <div className="flex flex-row w-[100%] py-[1rem] px-[2rem] justify-between bg-gray-200 rounded-xl">
            {/* 문제 수 */}
            <div className="flex flex-col items-center">
              <h2 className="text-gray-400">문제 수</h2>
              <div className="text-[20px] font-bold">{problemCount}</div>
            </div>
            <Gap wSize="1rem" />

            {/* 시험 시간 */}
            <div className="flex flex-col items-center">
              <h2 className="text-gray-400">시험 시간</h2>
              <div className="text-[20px] font-bold">{time}분</div>
            </div>
            <Gap wSize="1rem" />

            {/* 난이도 */}
            <div className="flex flex-col items-center">
              <h2 className="text-gray-400">난이도</h2>
              <div className="text-[20px] font-bold">
                {startLevel} ~ {endLevel}
              </div>
            </div>
          </div>
          <Gap hSize="1rem" />
        </div>
      </div>
      <Gap hSize="1rem" />
    </>
  );
}
