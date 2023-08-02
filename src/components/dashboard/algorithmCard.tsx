'use client';

import React from 'react';
import Lottie from 'react-lottie-player';

import graphLottieJson from '@/assets/lottiefiles/graph.json';
import stringLottieJson from '@/assets/lottiefiles/string.json';
import Gap from '@/utils/gap';

interface AlgorithmCardProps {
  algorithmTheme: string;
  problemCount: number;
  startLevel: string;
  endLevel: string;
}

export default function AlgorithmCard({
  algorithmTheme,
  problemCount,
  startLevel,
  endLevel,
}: AlgorithmCardProps) {
  return (
    <div className="flex flex-col justify-center rounded-xl w-[20rem] mr-[1rem] p-[2rem] bg-gradient-to-r from-[#FFA935] from-0% to-[#FFD553] to-100% ">
      {/* 알고리즘 이름 */}
      <div className="flex flex-row">
        <h1 className="text-[30px] text-white font-black">{algorithmTheme}</h1>
      </div>
      <Gap hSize="1rem" />

      {/* lottie file */}
      <div className="flex flex-row-reverse">
        <Lottie
          loop
          animationData={stringLottieJson}
          play
          className="h-[10rem] w-[10rem]"
        />
      </div>
      <Gap hSize="1rem" />

      {/* 알고리즘 정보 */}
      <div className="flex flex-row justify-between items-center w-[100%] h-[5rem] px-[2rem] rounded-xl bg-white">
        <div className="flex flex-col items-center">
          <h2 className="text-gray-400">문제 수</h2>
          <div className="font-bold text-[1.2rem]">{problemCount}</div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-gray-400">난이도</h2>
          <div className="font-bold text-[1.2rem]">
            {startLevel} ~ {endLevel}
          </div>
        </div>
      </div>
    </div>
  );
}
