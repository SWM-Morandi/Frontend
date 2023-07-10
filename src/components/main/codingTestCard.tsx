'use client';

import React from 'react';
import NaverIcon from '../../assets/icons/naver';

export default function MainCard() {
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
        <h1 className="text-[30px]">네이버</h1>
        <div className="mt-[30px]" />
        <NaverIcon />
        <div className="mt-[30px]" />
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h2>문제 수</h2>
            <div>4</div>
          </div>
          <div className="ml-[20px]" />
          <div className="flex flex-col">
            <h2>시험 시간</h2>
            <div>2시간</div>
          </div>
          <div className="ml-[20px]" />
          <div className="flex flex-col">
            <h2>난의도</h2>
            <div>S3 ~ G3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
