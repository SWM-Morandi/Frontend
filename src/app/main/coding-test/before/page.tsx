import Link from 'next/link';
import Image from 'next/image';
import NaverIcon from '@/assets/icons/naver_logo.png';

export default function CodingTestBeforePage() {
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-[#191F28] text-white">
        <Link
          href="/main"
          className="flex flex-row items-start w-[100vw] mt-[2vh] ml-[5vw]"
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

        <div className="flex flex-col justify-center items-center mt-[9rem] h-[40rem] w-[42rem] bg-white text-black rounded-2xl">
          <Image
            src={NaverIcon}
            alt="네이버로고"
            width={200}
            className="mt-[5rem]"
          />
          <div className="h-[5rem]" />
          <div className="w-[80%]">
            <h1 className="text-[25px]">네이버 코딩테스트</h1>
          </div>
          <div className="mt-[15px]" />

          <div className="flex flex-row justify-around w-[80%] py-[1rem] rounded-2xl bg-gray-200">
            <div className="flex flex-col justify-center items-center">
              <div className="text-gray-400">문제수</div>
              <div>4문제</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-gray-400">시험시간</div>
              <div>2시간</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-gray-400">난의도</div>
              <div>S3 ~ G3</div>
            </div>
          </div>
          <div className="mt-[15px]" />
          <div className="flex flex-row justify-between w-[80%] mt-[5px]">
            <div className="text-[#8B95A1]">문제 출제 유형</div>
            <div>문제 출제 유형: 그리디, 다이나믹 프로그래밍, DFS와 BFS</div>
          </div>
          <div className="flex flex-row justify-between w-[80%] mt-[5px]">
            <div className="text-[#8B95A1]">사용자 평균 정답률</div>
            <div>61%</div>
          </div>
          <Link
            href="/main/ide"
            className="flex flex-row justify-center items-center bg-[#FD5477] text-white h-[3.5rem] w-[80%] mt-[4rem] rounded-2xl"
          >
            <div className="text-[18px]">입장하기</div>
          </Link>
        </div>
      </div>
    </>
  );
}
