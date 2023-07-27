'use client';

import Link from 'next/link';
import { useState } from 'react';
import Sidebar from '@/components/ide/sidebar';

export default function Header() {
  const [sideProblemsBar, setSideProblemsBar] = useState(false);
  const ocSideProblemsBar = () => setSideProblemsBar(!sideProblemsBar);

  return (
    <>
      {sideProblemsBar && <Sidebar ocSideProblemsBar={ocSideProblemsBar} />}
      <div className="flex flex-row justify-between items-center h-[4rem] w-[100%] px-[2rem]">
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            fill="currentColor"
            viewBox="0 0 16 16"
            onClick={() => setSideProblemsBar(!sideProblemsBar)}
            className="cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <div className="text-[22px] ml-[0.5rem]">모랜디</div>
        </div>
        <div>00:41:57</div>
        <Link href="/dashboard/done">
          <div className="bg-[#F04452] px-[1rem] py-[0.5rem] rounded-xl">
            종료하기
          </div>
        </Link>
      </div>
    </>
  );
}
