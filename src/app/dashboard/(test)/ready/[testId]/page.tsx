'use client';

import { useState, useEffect } from 'react';
import { axiosInstance } from '@/api/axiosSetting';
import { useQuery } from 'react-query';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import SamsungLogo from '@/assets/logos/samsung_logo.png';
import NaverLogo from '@/assets/logos/naver_logo.png';
import KakaoLogo from '@/assets/logos/kakao_logo.png';
import LineLogo from '@/assets/logos/line_logo.png';
import CoupangLogo from '@/assets/logos/coupang_logo.png';
import BaeminLogo from '@/assets/logos/baemin_logo.png';
import CarrotLogo from '@/assets/logos/carrotmarket_logo.png';
import TossLogo from '@/assets/logos/toss_logo.png';

import Lottie from 'react-lottie-player';

import CodingTestPractice from '@/assets/lottiefiles/codingTestPractice.json';

import CodingTestInfo from '@/components/codingtest/testInfo';
import Gap from '@/utils/gap';

function Header() {
  return (
    <>
      <Link
        href="/dashboard"
        className="flex flex-row items-start w-screen pt-[2rem] pl-[2rem]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          fill="white"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
          </g>
        </svg>
        <div className="ml-[0.5rem]">나가기</div>
      </Link>
    </>
  );
}

interface TestType {
  testTypeId: number;
  testTypename: string;
  testTime: number;
  problemCount: number;
  startDifficulty: string;
  endDifficulty: string;
  averageCorrectAnswerRate: number;
  numberOfTestTrial: number;
}

const logo: { [k: string]: StaticImageData } = {
  7: SamsungLogo,
  8: NaverLogo,
  9: KakaoLogo,
  10: LineLogo,
  11: CoupangLogo,
  12: BaeminLogo,
};

export default function CodingTestBeforePage({
  params,
}: {
  params: { testId: string };
}) {
  const companyLogo = logo[params.testId];

  const testTypeAxios: () => Promise<TestType> = async () => {
    const res = await axiosInstance.get(`/test-types/${params.testId}`, {
      withCredentials: true,
    });
    return res.data;
  };

  const { isLoading, error, data } = useQuery<TestType>(
    'testType',
    testTypeAxios,
  );

  if (isLoading) return <div>로딩중...</div>;

  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      <div className="flex flex-col items-center h-screen w-screen bg-[#191F28] text-white">
        <Header />
        <Gap hSize="5rem" />

        {/* 입장전 코딩테스트 정보 카드 */}
        <div className="flex flex-col justify-center items-center h-[40rem] w-[42rem] bg-white text-black rounded-2xl">
          {/* 코딩테스트 회사 로고 */}
          {companyLogo ? (
            <Image
              src={companyLogo}
              alt={data?.testTypename + ' 로고'}
              width={350}
              className="mt-[2rem]"
            />
          ) : (
            <Lottie
              loop
              animationData={CodingTestPractice}
              play
              className="w-[20rem]"
            />
          )}
          <Gap hSize="3rem" />

          {/* 코딩테스트 회사 이름 */}
          <div className="w-[80%]">
            <h1 className="text-[1.8rem] font-bold">
              {data?.testTypename} 코딩테스트
            </h1>
          </div>
          <Gap hSize="1.5rem" />

          {/* 코딩테스트 정보*/}
          <CodingTestInfo
            testTime={data!.testTime}
            problemCount={data!.problemCount}
            startDifficulty={data!.startDifficulty}
            endDifficulty={data!.endDifficulty}
            averageCorrectAnswerRate={data!.averageCorrectAnswerRate}
          />
          <Gap hSize="2rem" />

          {/* 코딩테스트 입장 버튼 */}
          <Link
            href={{
              pathname: `/dashboard/ide`,
              query: { testId: params.testId },
            }}
            // as={`/dashboard/ide`}
            className="flex flex-row justify-center items-center bg-[#FD5477] text-white h-[3.5rem] w-[80%] rounded-2xl"
          >
            <div className="text-[18px]">입장하기</div>
          </Link>
        </div>
      </div>
    </>
  );
}
