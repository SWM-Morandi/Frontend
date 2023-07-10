'use client';

import React from 'react';
import Link from 'next/link';

import NaverIcon from '../../assets/icons/naver';

export default function MainCard({
  componey,
  problemCount,
  time,
  startLevel,
  endLevel,
}: {
  componey: string;
  problemCount: number;
  time: number;
  startLevel: string;
  endLevel: string;
}) {
  const data = {
    componey: componey,
    problemCount: problemCount,
    time: time,
    startLevel: startLevel,
    endLevel: endLevel,
  };

  // const data = {
  //   componey: '네이버',
  //   problemCount: 4,
  //   time: 2,
  //   startLevel: 'S3',
  //   endLevel: 'G3',
  // };

  return (
    <div
      style={{
        width: '250px',
        height: '300px',
        backgroundColor: 'gray',
        borderRadius: '20px',
        margin: '10px 10px',
      }}
    >
      <div className="flex flex-col justify-center items-center p-[20px]">
        <h1 className="text-[30px]">{data.componey}</h1>
        <div className="mt-[30px]" />
        <NaverIcon />
        <div className="mt-[30px]" />
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h2>문제 수</h2>
            <div>{data.problemCount}문제</div>
          </div>
          <div className="ml-[20px]" />
          <div className="flex flex-col">
            <h2>시험 시간</h2>
            <div>{data.time}시간</div>
          </div>
          <div className="ml-[20px]" />
          <div className="flex flex-col">
            <h2>난의도</h2>
            <div>
              {data.startLevel} ~ {data.endLevel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
