import Link from 'next/link';
import Image from 'next/image';
import NaverIcon from '@/assets/logos/naver_logo.png';
import CodingTestInfo from '@/components/codingtest/testInfo';

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

export default function CodingTestBeforePage() {
  return (
    <>
      <div className="flex flex-col items-center h-screen w-screen bg-[#191F28] text-white">
        <Header />
        <div className="flex flex-col justify-center items-center mt-[5rem] h-[40rem] w-[42rem] bg-white text-black rounded-2xl">
          <Image
            src={NaverIcon}
            alt="네이버로고"
            width={350}
            className="mt-[2rem]"
          />
          <div className="h-[5rem]" />
          <div className="w-[80%]">
            <h1 className="text-[1.8rem] font-bold">네이버 코딩테스트</h1>
          </div>
          <div className="mt-[2rem]" />
          <CodingTestInfo />
          <Link
            href="/dashboard/ide"
            className="flex flex-row justify-center items-center bg-[#FD5477] text-white h-[3.5rem] w-[80%] mt-[4rem] rounded-2xl"
          >
            <div className="text-[18px]">입장하기</div>
          </Link>
        </div>
      </div>
    </>
  );
}
