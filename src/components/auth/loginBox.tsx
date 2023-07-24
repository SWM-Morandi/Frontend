'use client';

import Link from 'next/link';

export default function LoginBox() {
  return (
    <>
      <div className="flex items-end justify-center">
        <div className="flex flex-col items-center justify-center h-[30rem] w-[42rem] bg-[#FBFBFB] rounded-lg drop-shadow-lg backdrop-blur">
          <h1 className="text-[2rem] mb-[20px]">모랜디</h1>
          <h6 className="text-[1.2rem] mb-[30px]">모두의 랜덤 디펜스</h6>
          <Link href="/main">
            <button className="h-[3rem] w-[26rem] bg-[#FBFBFB] rounded-lg drop-shadow-md mb-[20px]">
              구글 계정으로 계속하기
            </button>
          </Link>
          <button className="h-[3rem] w-[26rem] bg-[#FBFBFB] rounded-lg drop-shadow-md mb-[20px]">
            로그아웃
          </button>
        </div>
      </div>
    </>
  );
}
