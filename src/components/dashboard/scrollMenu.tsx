'use client';

import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './scroll.css';
import Link from 'next/link';

import CodingTestCard from './codingTestCard';
import AlgorithmCard from './algorithmCard';

/***
 * 왼쪽 화살표 컴포넌트 고차함수
 */
function LeftArrowTest(height: string) {
  return function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
    return (
      <button
        disabled={isFirstItemVisible} // 필요 없는거 같음
        onClick={() => scrollPrev()}
        className="opacity-0 hover:opacity-30"
        style={{
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none',
          position: 'absolute',
          left: '4rem',
          height: `${height}`,
          width: `50px`,
          zIndex: '999',
          backgroundColor: 'gray',
        }}
      >
        ←
      </button>
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
      <button
        disabled={isLastItemVisible}
        onClick={() => scrollNext()}
        className="opacity-0 hover:opacity-30"
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
          backgroundColor: 'gray',
        }}
      >
        →
      </button>
    );
  };
}

/***
 * 코딩테스트 카드 스크롤 컴포넌트
 */
export function CodingTestCardScroll() {
  const data = [
    {
      companyName: '네이버',
      problemCount: 4,
      time: 2,
      startLevel: 'S3',
      endLevel: 'G3',
    },
    {
      companyName: '카카오',
      problemCount: 4,
      time: 2,
      startLevel: 'S2',
      endLevel: 'G2',
    },
    {
      companyName: '라인',
      problemCount: 4,
      time: 2,
      startLevel: 'S1',
      endLevel: 'G4',
    },
    {
      companyName: '쿠팡',
      problemCount: 4,
      time: 2,
      startLevel: 'G5',
      endLevel: 'P5',
    },
    {
      companyName: '배달의민족',
      problemCount: 4,
      time: 2,
      startLevel: 'S2',
      endLevel: 'G1',
    },
    {
      companyName: '토스',
      problemCount: 4,
      time: 2,
      startLevel: 'S1',
      endLevel: 'G2',
    },
    {
      companyName: '당근마켓',
      problemCount: 4,
      time: 2,
      startLevel: 'S4',
      endLevel: 'G2',
    },
  ];

  return (
    <ScrollMenu
      LeftArrow={LeftArrowTest('17rem')}
      RightArrow={RightArrowTest('17rem')}
    >
      {data.map((item, idx) => {
        return (
          <Link href="/dashboard/ready" key={idx}>
            <CodingTestCard
              companyName={item.companyName}
              problemCount={item.problemCount}
              time={item.time}
              startLevel={item.startLevel}
              endLevel={item.endLevel}
            />
          </Link>
        );
      })}
    </ScrollMenu>
  );
}

/***
 * 알고리즘 카드 스크롤 컴포넌트
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
