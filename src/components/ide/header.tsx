'use client';

import Link from 'next/link';
import { useState } from 'react';
import Sidebar from '@/components/ide/sidebar';
import { useRouter } from 'next/navigation';

interface ProblemInfoType {
  problem_title: string;
  problem_description: string;
  problem_input: string;
  problem_output: string;
  input_sample: Array<string>;
  output_sample: Array<string>;
}

export default function Header({
  problemId,
  setProblemId,
  problemInfo,
  time,
  exitInfo,
}: {
  problemId: any;
  setProblemId: any;
  problemInfo: ProblemInfoType[];
  time: number;
  exitInfo: { testId: number; testTypeId: string };
}) {
  const router = useRouter();
  const [sideProblemsBar, setSideProblemsBar] = useState(false);
  const ocSideProblemsBar = () => setSideProblemsBar(!sideProblemsBar);

  const hour = Math.floor(time / 3600)
    .toString()
    .padStart(2, '0');
  const min = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const sec = (time % 60).toString().padStart(2, '0');

  return (
    <>
      {sideProblemsBar && (
        <Sidebar
          ocSideProblemsBar={ocSideProblemsBar}
          problemId={problemId}
          setProblemId={setProblemId}
          problemInfo={problemInfo}
        />
      )}
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
        <div className="flex flex-row">
          <svg
            width="28"
            height="25"
            viewBox="0 0 32 28"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-[0.5rem]"
          >
            <path
              d="M31.1786 10.3904H22.0358C21.8786 10.3904 21.7501 10.519 21.7501 10.6761V12.3904C21.7501 12.5475 21.8786 12.6761 22.0358 12.6761H31.1786C31.3358 12.6761 31.4643 12.5475 31.4643 12.3904V10.6761C31.4643 10.519 31.3358 10.3904 31.1786 10.3904ZM26.3929 15.2475H22.0358C21.8786 15.2475 21.7501 15.3761 21.7501 15.5333V17.2475C21.7501 17.4047 21.8786 17.5333 22.0358 17.5333H26.3929C26.5501 17.5333 26.6786 17.4047 26.6786 17.2475V15.5333C26.6786 15.3761 26.5501 15.2475 26.3929 15.2475ZM14.4751 7.19397H12.9286C12.7072 7.19397 12.5286 7.37254 12.5286 7.59397V16.4511C12.5286 16.5797 12.5893 16.6975 12.6929 16.7725L18.0108 20.6511C18.1893 20.7797 18.4393 20.744 18.5679 20.5654L19.4858 19.3118V19.3083C19.6143 19.1297 19.5751 18.8797 19.3965 18.7511L14.8715 15.4797V7.59397C14.8751 7.37254 14.6929 7.19397 14.4751 7.19397Z"
              fill="white"
            />
            <path
              d="M26.1715 19.7439H24.1072C23.9072 19.7439 23.7179 19.8475 23.6107 20.0189C23.1565 20.739 22.6234 21.4062 22.0215 22.0082C20.985 23.0481 19.7562 23.8766 18.4036 24.4475C17 25.0404 15.5107 25.3404 13.975 25.3404C12.4357 25.3404 10.9465 25.0404 9.54645 24.4475C8.19288 23.8761 6.97502 23.0547 5.9286 22.0082C4.88217 20.9618 4.06074 19.7439 3.48931 18.3904C2.89645 16.9904 2.59645 15.5011 2.59645 13.9618C2.59645 12.4225 2.89645 10.9368 3.48931 9.53323C4.06074 8.17966 4.88217 6.9618 5.9286 5.91538C6.97502 4.86895 8.19288 4.04752 9.54645 3.47609C10.9465 2.88323 12.4393 2.58323 13.975 2.58323C15.5143 2.58323 17.0036 2.88323 18.4036 3.47609C19.7572 4.04752 20.975 4.86895 22.0215 5.91538C22.6234 6.5174 23.1565 7.18461 23.6107 7.90466C23.7179 8.07609 23.9072 8.17966 24.1072 8.17966H26.1715C26.4179 8.17966 26.575 7.92252 26.4643 7.70466C24.1357 3.07252 19.4143 0.0618037 14.1429 0.00108938C6.42502 -0.0953392 0.0143101 6.22252 2.43993e-05 13.9332C-0.0142613 21.6582 6.24645 27.9261 13.9715 27.9261C19.3107 27.9261 24.1107 24.9047 26.4643 20.2189C26.4894 20.169 26.5013 20.1134 26.4989 20.0575C26.4964 20.0017 26.4798 19.9473 26.4504 19.8997C26.4211 19.8521 26.38 19.8128 26.3312 19.7856C26.2824 19.7583 26.2274 19.744 26.1715 19.7439Z"
              fill="white"
            />
          </svg>
          <div className="text-[1.1rem]">
            {hour}:{min}:{sec}
          </div>
        </div>
        <button
          className="bg-[#F04452] px-[1rem] py-[0.5rem] rounded-xl"
          onClick={() => {
            if (confirm('테스트를 종료하시면 다시 시작할 수 없습니다.')) {
              router.push(
                `/dashboard/done?testId=${exitInfo.testId}&testTypeId=${exitInfo.testTypeId}`,
              );
            } else {
            }
          }}
        >
          종료하기
        </button>
      </div>
    </>
  );
}
