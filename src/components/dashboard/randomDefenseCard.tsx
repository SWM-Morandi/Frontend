'use client';

import React from 'react';
import Link from 'next/link';
import Gap from '@/utils/gap';
import Text from '@/utils/text';

import Lottie from 'react-lottie-player';

import Bronze from '@/assets/lottiefiles/bronze.json';
import Sliver from '@/assets/lottiefiles/silver.json';
import Gold from '@/assets/lottiefiles/gold.json';

interface CodingTestCardProps {
  testTypeId: number;
  testTypename: string;
  testTime: number;
  problemCount: number;
  startDifficulty: string;
  endDifficulty: string;
}

const logo: { [k: string]: any } = {
  13: Bronze,
  14: Sliver,
  15: Gold,
};

export default function RandomDefenseCard({
  testTypeId,
  testTypename,
  testTime,
  problemCount,
  startDifficulty,
  endDifficulty,
}: CodingTestCardProps) {
  return (
    <>
      <Link href={`/dashboard/ready/${testTypeId}`}>
        <div className="w-[23rem] my-[1rem] mr-[3rem]">
          <div className="flex flex-col justify-center items-center h-[15rem] p-[20px] shadow-md rounded-xl">
            <div className="w-[20rem] font-bold">{testTypename}</div>

            {/* 코딩테스트 기업 로고 */}
            <Lottie
              loop
              animationData={logo[testTypeId]}
              play
              className="w-[20rem]"
            />
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
                <div className="text-[20px] font-bold">{testTime}분</div>
              </div>
              <Gap wSize="1rem" />

              {/* 난이도 */}
              <div className="flex flex-col items-center">
                <h2 className="text-gray-400">난이도</h2>
                <div className="text-[20px] font-bold">
                  {startDifficulty} ~ {endDifficulty}
                </div>
              </div>
            </div>
            <Gap hSize="1rem" />
          </div>
        </div>
        <Gap hSize="1rem" />
      </Link>
    </>
  );
}
