'use client';

function XIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="22.3311"
        y1="1.70711"
        x2="1.70718"
        y2="22.3311"
        stroke="#191F28"
        strokeWidth="2"
      />
      <line
        x1="22.2502"
        y1="22.3311"
        x2="1.62622"
        y2="1.70718"
        stroke="#191F28"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="13" height="13" rx="6.5" fill="#191F28" />
      <path
        d="M6.79554 3.79082L9.51221 6.50598L6.82888 9.18782"
        stroke="white"
        strokeWidth="1.12821"
        strokeLinecap="square"
      />
      <path
        d="M9.15387 6.48926H3.48721"
        stroke="white"
        strokeWidth="1.12821"
        strokeLinecap="square"
      />
    </svg>
  );
}

import Link from 'next/link';
import Gap from '@/utils/gap';
import dayjs from 'dayjs';
import { useState } from 'react';
import { axiosInstance } from '@/api/axiosSetting';

interface AttemptProblemDtoType {
  testProblemId: number;
  bojProblemId: number;
  isSolved: boolean;
  executionTime: number | null;
}

interface TestHistoryInfoType {
  testId: number;
  testDate: string;
  testTime: number;
  problemCount: number;
  acceptCount: number;
  startDifficulty: string;
  endDifficulty: string;
  testTypename: string;
  testRating: number;
  originRating: number;
  attemptProblemDto: AttemptProblemDtoType[];
}

interface UserInfoUpdateModalProps {
  setTestHistoryDetailModalFlag: (flag: boolean) => void;
  testHistoryInfo: TestHistoryInfoType | undefined;
}

export default function TestHistoryDetailModal({
  setTestHistoryDetailModalFlag,
  testHistoryInfo,
}: UserInfoUpdateModalProps) {
  return (
    <div className="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="fixed w-[100vw] h-[100vh] bg-black opacity-50"></div>
      <div className="z-20 flex flex-col justify-center items-center py-[2rem] w-[28rem] inset-0 bg-white rounded-xl">
        <div className="flex flex-row items-center justify-between w-[85%]">
          <div className="text-[1.8rem] font-semibold">
            {testHistoryInfo?.testTypename}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setTestHistoryDetailModalFlag(false);
            }}
          >
            <XIcon />
          </div>
        </div>

        <Gap hSize="1rem" />
        <div className="flex flex-col w-[85%]">
          <div className="text-[1.2rem] font-bold">시험 응시 날짜</div>
          <div>
            {dayjs(testHistoryInfo?.testDate).format('YYYY')}년{' '}
            {dayjs(testHistoryInfo?.testDate).format('MM')}월{' '}
            {dayjs(testHistoryInfo?.testDate).format('DD')}일{' '}
            {dayjs(testHistoryInfo?.testDate).format('HH')}시{' '}
            {dayjs(testHistoryInfo?.testDate).format('mm')}분 응시
          </div>
          <div></div>
        </div>

        <Gap hSize="1.5rem" />
        <div className="flex flex-col w-[85%]">
          <div className="text-[1.2rem] font-bold">레이팅 포인트</div>
          <div>{testHistoryInfo?.testRating}점</div>
          <div></div>
        </div>

        <Gap hSize="1.5rem" />
        <div className="flex flex-row w-[85%]">
          <div className="flex flex-col w-[50%]">
            <div className="text-[1.2rem] font-bold">시험 난이도</div>
            <div>
              {testHistoryInfo?.startDifficulty} ~{' '}
              {testHistoryInfo?.endDifficulty}
            </div>
            <div></div>
          </div>
          <div className="flex flex-col w-[50%]">
            <div className="text-[1.2rem] font-bold">시험 시간</div>
            <div>{testHistoryInfo?.testTime} 분</div>
            <div></div>
          </div>
        </div>

        <Gap hSize="1.5rem" />
        <div className="flex flex-row w-[85%]">
          <div className="flex flex-col w-[50%]">
            <div className="text-[1.2rem] font-bold">시험 문제 수</div>
            <div>{testHistoryInfo?.problemCount} 개</div>
            <div></div>
          </div>
          <div className="flex flex-col w-[50%]">
            <div className="text-[1.2rem] font-bold">맞춘 문제 수</div>
            <div>{testHistoryInfo?.acceptCount} 개</div>
            <div></div>
          </div>
        </div>

        <Gap hSize="1.5rem" />
        <div className="flex flex-col w-[85%]">
          <div className="text-[1.2rem] font-bold mb-[0.3rem]">시험 결과</div>
          <div className="flex flex-row w-[100%]">
            <div className="flex flex-col w-[50%]">
              {testHistoryInfo?.attemptProblemDto.map((item, idx) => {
                if (idx >= testHistoryInfo?.attemptProblemDto.length / 2) {
                  return;
                }

                return (
                  <div
                    key={idx}
                    className="flex flex-row w-full justify-between items-center mb-[0.5rem]"
                  >
                    <div
                      className={`flex flex-row justify-center items-center w-[9rem] h-[5rem] border rounded-2xl ${
                        item.isSolved ? 'bg-[#12AC79]' : 'bg-[#F04452]'
                      }`}
                    >
                      <div className="text-[1.5rem] text-white">
                        {item.testProblemId}번
                      </div>
                      <Gap wSize="1rem" />
                      {item.isSolved ? (
                        <div className="text-[0.9rem] text-white">해결</div>
                      ) : (
                        <div className="text-[0.9rem] text-white">미해결</div>
                      )}
                    </div>
                    <Gap wSize="0.5rem" />
                    <Link
                      href={`https://acmicpc.net/problem/${item.bojProblemId}`}
                      target="_blank"
                    >
                      <ArrowIcon />
                    </Link>
                    <Gap wSize="1rem" />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col w-[50%]">
              {testHistoryInfo?.attemptProblemDto.map((item, idx) => {
                if (idx < testHistoryInfo?.attemptProblemDto.length / 2) return;
                return (
                  <div
                    key={idx + 100}
                    className="flex flex-row w-full justify-between items-center mb-[0.5rem]"
                  >
                    <div
                      className={`flex flex-row justify-center items-center w-[9rem] h-[5rem] border rounded-2xl ${
                        item.isSolved ? 'bg-[#12AC79]' : 'bg-[#F04452]'
                      }`}
                    >
                      <div className="text-[1.5rem] text-white">
                        {item.testProblemId}번
                      </div>
                      <Gap wSize="1rem" />
                      {item.isSolved ? (
                        <div className="text-[0.9rem] text-white">해결</div>
                      ) : (
                        <div className="text-[0.9rem] text-white">미해결</div>
                      )}
                    </div>
                    <Gap wSize="0.5rem" />
                    <Link
                      href={`https://acmicpc.net/problem/${item.bojProblemId}`}
                      target="_blank"
                    >
                      <ArrowIcon />
                    </Link>
                    <Gap wSize="1rem" />
                  </div>
                );
              })}
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
