'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

import NaverLogo from '@/assets/logos/naver_logo.png';
import KakaoLogo from '@/assets/logos/kakao_logo.png';
import LineLogo from '@/assets/logos/line_logo.png';
import CoupangLogo from '@/assets/logos/coupang_logo.png';
import BaeminLogo from '@/assets/logos/baemin_logo.png';
import CarrotLogo from '@/assets/logos/carrotmarket_logo.png';
import TossLogo from '@/assets/logos/toss_logo.png';

import Gap from '@/utils/gap';

export default function MainCard({
  companyName,
  problemCount,
  time,
  startLevel,
  endLevel,
}: {
  companyName: string;
  problemCount: number;
  time: number;
  startLevel: string;
  endLevel: string;
}) {
  const data = {
    companyName: companyName,
    problemCount: problemCount,
    time: time,
    startLevel: startLevel,
    endLevel: endLevel,
  };
  const logo: { [k: string]: StaticImageData } = {
    네이버: NaverLogo,
    카카오: KakaoLogo,
    라인: LineLogo,
    쿠팡: CoupangLogo,
    배달의민족: BaeminLogo,
    당근마켓: CarrotLogo,
    토스: TossLogo,
  };

  const companyLogo = logo[companyName];

  return (
    <>
      <div className="w-[23rem] my-[1rem] mr-[3rem]">
        <div className="flex flex-col justify-center items-center h-[15rem] p-[20px] shadow-md rounded-xl">
          {/* 코딩테스트 기업 로고 */}
          <Image src={companyLogo} alt={companyName} width={250} />
          <Gap hSize="3rem" />

          {/* 기업 코딩테스트 정보 */}
          <div className="flex flex-row w-[100%] py-[1rem] px-[2rem] justify-between bg-gray-200 rounded-xl">
            {/* 문제 수 */}
            <div className="flex flex-col items-center">
              <h2 className="text-gray-400">문제 수</h2>
              <div className="text-[20px] font-bold">{data.problemCount}</div>
            </div>
            <Gap wSize="1rem" />

            {/* 시험 시간 */}
            <div className="flex flex-col items-center">
              <h2 className="text-gray-400">시험 시간</h2>
              <div className="text-[20px] font-bold">{data.time}시간</div>
            </div>
            <Gap wSize="1rem" />

            {/* 난이도 */}
            <div className="flex flex-col items-center">
              <h2 className="text-gray-400">난의도</h2>
              <div className="text-[20px] font-bold">
                {data.startLevel} ~ {data.endLevel}
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
