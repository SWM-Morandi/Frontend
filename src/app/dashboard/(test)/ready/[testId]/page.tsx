'use client';

import { useState, useEffect } from 'react';
import Axios from 'axios';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import NaverLogo from '@/assets/logos/naver_logo.png';
import KakaoLogo from '@/assets/logos/kakao_logo.png';
import LineLogo from '@/assets/logos/line_logo.png';
import CoupangLogo from '@/assets/logos/coupang_logo.png';
import BaeminLogo from '@/assets/logos/baemin_logo.png';
import CarrotLogo from '@/assets/logos/carrotmarket_logo.png';
import TossLogo from '@/assets/logos/toss_logo.png';
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

export default function CodingTestBeforePage({
  params,
}: {
  params: { testId: string };
}) {
  const logo: { [k: string]: [StaticImageData, string] } = {
    8: [NaverLogo, '네이버'],
    7: [KakaoLogo, '카카오'],
    9: [LineLogo, '라인'],
    // 4: [CoupangLogo, '쿠팡'],
    // 5: [BaeminLogo, '배달의 민족'],
    // 6: [CarrotLogo, '당근마켓'],
    // 7: [TossLogo, '토스'],
  };

  const companyLogo = logo[params.testId];

  const [data, setData] = useState<{
    testTypename: string;
    testTime: number;
    problemCount: number;
    startDifficulty: string;
    endDifficulty: string;
    averageCorrectAnswerRate: number;
    numberOfTestTrial: number;
  }>({
    testTypename: '',
    testTime: 0,
    problemCount: 0,
    startDifficulty: '',
    endDifficulty: '',
    averageCorrectAnswerRate: 0,
    numberOfTestTrial: 0,
  });

  useEffect(() => {
    Axios.get(`http://localhost:8080/test-types/${params.testId}`, {
      withCredentials: true,
    })
      .then((res) => {
        console.log('성공');
        setData(res.data);
      })
      .catch((err) => {
        console.log('에러');
        console.log(err);
      });
  }, []);

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
              src={companyLogo[0]}
              alt={companyLogo[1] + ' 로고'}
              width={350}
              className="mt-[2rem]"
            />
          ) : (
            <></>
          )}
          <Gap hSize="5rem" />

          {/* 코딩테스트 회사 이름 */}
          <div className="w-[80%]">
            <h1 className="text-[1.8rem] font-bold">
              {data.testTypename} 코딩테스트
            </h1>
          </div>
          <Gap hSize="1.5rem" />

          {/* 코딩테스트 정보*/}
          <CodingTestInfo
            testTime={data.testTime}
            problemCount={data.problemCount}
            startDifficulty={data.startDifficulty}
            endDifficulty={data.endDifficulty}
            averageCorrectAnswerRate={data.averageCorrectAnswerRate}
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
