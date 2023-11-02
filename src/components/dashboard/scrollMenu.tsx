'use client';

import React, { useEffect, useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './scroll.css';
import Link from 'next/link';

import CodingTestCard from './codingTestCard';
import AlgorithmCard from './algorithmCard';
import LevelTestCard from './levelTestCard';
import RandomDefenseCard from './randomDefenseCard';

import Gap from '@/utils/gap';

import { useQuery } from 'react-query';

import { axiosInstance } from '@/api/axiosSetting';

/***
 * 왼쪽 화살표 컴포넌트 고차함수
 */
function LeftArrowTest(height: string) {
  return function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
    return (
      <div
        // disabled={isFirstItemVisible} // 필요 없는거 같음

        className="opacity-30"
        style={{
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none',
          position: 'absolute',
          left: '3rem',
          height: `${height}`,
          width: `50px`,
          zIndex: '999',
        }}
      >
        <LeftArrowIcon onClick={() => scrollPrev()} />
      </div>
    );
  };
}

/***
 * 오른쪽 화살표 컴포넌트 고차함수
 */
function RightArrowTest(height: string) {
  return function RightArrow() {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      // <button
      //   disabled={isLastItemVisible}
      //   onClick={() => scrollNext()}
      //   className="opacity-0 hover:opacity-30"
      //   style={{

      //   }}
      // >
      //   →
      // </button>
      <div
        // disabled={isFirstItemVisible} // 필요 없는거 같음

        className="opacity-30"
        style={{
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none',
          position: 'absolute',
          right: '3rem',
          height: `${height}`,
          width: '50px',
          zIndex: '999',
        }}
      >
        <RightArrowIcon onClick={() => scrollNext()} />
      </div>
    );
  };
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

/***
 * 코딩테스트 카드 스크롤 컴포넌트
 */

export function CodingTestCardScroll() {
  const testTypeComponyAxios: () => Promise<TestType[]> = async () => {
    const response = await axiosInstance.get<TestType[]>(
      `/test-types/company`,
      {
        withCredentials: true,
      },
    );
    console.log(response);
    return response.data;
  };

  const { isLoading, error, data } = useQuery<TestType[]>(
    'testTypeCompony',
    testTypeComponyAxios,
  );

  if (isLoading) return <div>로딩중...</div>;

  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <ScrollMenu
      LeftArrow={LeftArrowTest('20rem')}
      RightArrow={RightArrowTest('20rem')}
    >
      {data!.map((item, idx) => {
        return (
          <CodingTestCard
            testTypeId={item.testTypeId}
            testTypename={item.testTypename}
            testTime={item.testTime}
            problemCount={item.problemCount}
            startDifficulty={item.startDifficulty}
            endDifficulty={item.endDifficulty}
            key={idx}
          />
        );
      })}
    </ScrollMenu>
  );
}

/**
 * 시험 난이도별 카드 스크롤 컴포넌트
 */
export function LevelCardScroll() {
  const testTypePracticeAxios: () => Promise<TestType[]> = async () => {
    const response = await axiosInstance.get<TestType[]>(
      `/test-types/practice`,
      {
        withCredentials: true,
      },
    );
    console.log(response);
    return response.data;
  };

  const { isLoading, error, data } = useQuery<TestType[]>(
    'testTypePractice',
    testTypePracticeAxios,
  );

  if (isLoading) return <div>로딩중...</div>;

  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <ScrollMenu
      LeftArrow={LeftArrowTest('29rem')}
      RightArrow={RightArrowTest('29rem')}
    >
      {data!.map((item, idx) => {
        return (
          <LevelTestCard
            testTypeId={item.testTypeId}
            testTypename={item.testTypename}
            testTime={item.testTime}
            problemCount={item.problemCount}
            startDifficulty={item.startDifficulty}
            endDifficulty={item.endDifficulty}
            key={idx}
          />
        );
      })}
    </ScrollMenu>
  );
}

export function RandomDefenseScroll() {
  const testTypePracticeAxios: () => Promise<TestType[]> = async () => {
    const response = await axiosInstance.get<TestType[]>(
      `/test-types/random-defense`,
      {
        withCredentials: true,
      },
    );
    console.log(response);
    return response.data;
  };

  const { isLoading, error, data } = useQuery<TestType[]>(
    'testTypeRandomDefense',
    testTypePracticeAxios,
  );

  if (isLoading) return <div>로딩중...</div>;

  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <ScrollMenu
    // LeftArrow={LeftArrowTest('25.5rem')}
    // RightArrow={RightArrowTest('25.5rem')}
    >
      {data!.map((item, idx) => {
        return (
          <RandomDefenseCard
            testTypeId={item.testTypeId}
            testTypename={item.testTypename}
            testTime={item.testTime}
            problemCount={item.problemCount}
            startDifficulty={item.startDifficulty}
            endDifficulty={item.endDifficulty}
            key={idx}
          />
        );
      })}
    </ScrollMenu>
  );
}

/***
 * 알고리즘 카드 스크롤 컴포넌트
 * 수정 씹쌉필요
 */
export function AlgorithmCardScroll() {
  const data = [
    {
      algorithmTheme: '구현',
      problemCount: 100,
      startLevel: 'S3',
      endLevel: 'G3',
    },
    {
      algorithmTheme: '그래프',
      problemCount: 36,
      startLevel: 'G5',
      endLevel: 'G3',
    },
    {
      algorithmTheme: '그리디',
      problemCount: 93,
      startLevel: 'S3',
      endLevel: 'G2',
    },
    {
      algorithmTheme: '문자열',
      problemCount: 88,
      startLevel: 'S3',
      endLevel: 'P4',
    },
    {
      algorithmTheme: '수학',
      problemCount: 39,
      startLevel: 'S1',
      endLevel: 'G3',
    },
    {
      algorithmTheme: '이분탐색',
      problemCount: 73,
      startLevel: 'G5',
      endLevel: 'G1',
    },
    {
      algorithmTheme: '자료구조',
      problemCount: 13,
      startLevel: 'S1',
      endLevel: 'P5',
    },
    {
      algorithmTheme: '정렬',
      problemCount: 43,
      startLevel: 'S3',
      endLevel: 'G3',
    },
    {
      algorithmTheme: 'DFS / BFS',
      problemCount: 74,
      startLevel: 'G5',
      endLevel: 'G2',
    },
    {
      algorithmTheme: '최단경로',
      problemCount: 123,
      startLevel: 'S1',
      endLevel: 'P5',
    },
    {
      algorithmTheme: '다이나믹 프로그래밍',
      problemCount: 64,
      startLevel: 'S2',
      endLevel: 'G5',
    },
    {
      algorithmTheme: '비트마스킹',
      problemCount: 48,
      startLevel: 'S1',
      endLevel: 'G2',
    },
  ];

  return (
    <>
      <ScrollMenu
        LeftArrow={LeftArrowTest('23.75rem')}
        RightArrow={RightArrowTest('23.75rem')}
      >
        {data.map((item, idx) => {
          return (
            <Link href="/dashboard/problem-set" key={idx + 100}>
              <AlgorithmCard
                algorithmTheme={item.algorithmTheme}
                problemCount={item.problemCount}
                startLevel={item.startLevel}
                endLevel={item.endLevel}
              />
            </Link>
          );
        })}
      </ScrollMenu>
    </>
  );
}

function RightArrowIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onClick={onClick}
    >
      <rect width="24" height="24" rx="12" fill="#191F28" />
      <path
        d="M12.5456 6.99805L17.561 12.0106L12.6071 16.9617"
        stroke="white"
        strokeWidth="1.12821"
        strokeLinecap="square"
      />
      <path
        d="M16.8995 11.98H6.43793"
        stroke="white"
        strokeWidth="1.12821"
        strokeLinecap="square"
      />
    </svg>
  );
}

function LeftArrowIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onClick={onClick}
    >
      <rect
        width="13"
        height="13"
        rx="6.5"
        transform="matrix(-1 0 0 1 13 0)"
        fill="#191F28"
      />
      <path
        d="M6.20445 3.79083L3.48779 6.50599L6.17112 9.18783"
        stroke="white"
        strokeWidth="1.12821"
        strokeLinecap="square"
      />
      <path
        d="M3.84612 6.48926H9.51279"
        stroke="white"
        strokeWidth="1.12821"
        strokeLinecap="square"
      />
    </svg>
  );
}
