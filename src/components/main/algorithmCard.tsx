'use client';

import React from 'react';
import NaverIcon from '../../assets/icons/naver';

export default function MainCard() {
  return (
    <div className="h-[300px] w-[250px] border border-black rounded-xl shadow m-[10px]">
      <div className="flex flex-col justify-center items-center p-[20px]">
        <h1 className="text-[30px] mt-[50px] mb-[50px]">그리디</h1>
        <div className="mt-[30px]" />
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h2>문제 수</h2>
            <div>100</div>
          </div>
          <div className="ml-[20px]" />
          <div className="flex flex-col">
            <h2>난의도</h2>
            <div>S5 ~ G4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
