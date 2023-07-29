import Link from 'next/link';
import Image from 'next/image';
import NaverIcon from '@/assets/logos/naver_logo.png';
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

function Button({ text }: { text: string }) {
  return (
    <Link
      href="/dashboard/ide"
      className="flex flex-row justify-center items-center bg-[#FD5477] text-white h-[3.5rem] w-[80%] rounded-2xl"
    >
      <div className="text-[18px]">{text}</div>
    </Link>
  );
}

export default function CodingTestBeforePage() {
  return (
    <>
      <div className="flex flex-col items-center h-screen w-screen bg-[#191F28] text-white">
        <Header />
        <Gap hSize="5rem" />

        {/* 입장전 코딩테스트 정보 카드 */}
        <div className="flex flex-col justify-center items-center h-[40rem] w-[42rem] bg-white text-black rounded-2xl">
          {/* 코딩테스트 회사 로고 */}
          <Image
            src={NaverIcon}
            alt="네이버로고"
            width={350}
            className="mt-[2rem]"
          />
          <Gap hSize="5rem" />

          {/* 코딩테스트 회사 이름 */}
          <div className="w-[80%]">
            <h1 className="text-[1.8rem] font-bold">네이버 코딩테스트</h1>
          </div>
          <Gap hSize="1.5rem" />

          {/* 코딩테스트 정보*/}
          <CodingTestInfo />
          <Gap hSize="2rem" />

          {/* 코딩테스트 입장 버튼 */}
          <Button text="입장하기" />
        </div>
      </div>
    </>
  );
}
