'use client';

import React, { useEffect, useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './scroll.css';
import Link from 'next/link';

import CodingTestCard from './codingTestCard';
import AlgorithmCard from './algorithmCard';
import LevelTestCard from './levelTestCard';

import Gap from '@/utils/gap';

import Axios from 'axios';

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
          left: '3rem',
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
  const [data, setData] = useState<
    Array<{
      companyName: string;
      problemCount: number;
      time: number;
      startLevel: string;
      endLevel: string;
    }>
  >([]);

  useEffect(() => {
    Axios.get('http://localhost:8080/test-types/company', {
      withCredentials: true,
    })
      .then((res) => {
        console.log('성공');
        const newData = res.data.map((item: any) => ({
          companyName: item.testTypename,
          problemCount: item.problemCount,
          time: item.testTime,
          startLevel: item.startDifficulty,
          endLevel: item.endDifficulty,
        }));
        setData(newData);
        console.log(newData);
      })
      .catch((err) => {
        console.log('에러');
        console.log(err);
      });
  }, []);

  return (
    <ScrollMenu
      LeftArrow={LeftArrowTest('16rem')}
      RightArrow={RightArrowTest('16rem')}
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

/**
 * 시험 난이도별 카드 스크롤 컴포넌트
 */
export function LevelCardScroll() {
  const [data, setData] = useState<
    Array<{
      testTypename: string;
      problemCount: number;
      time: number;
      startLevel: string;
      endLevel: string;
    }>
  >([]);

  useEffect(() => {
    Axios.get('http://localhost:8080/test-types/practice', {
      withCredentials: true,
    })
      .then((res) => {
        console.log('성공');
        const newData = res.data.map((item: any) => ({
          testTypename: item.testTypename,
          problemCount: item.problemCount,
          time: item.testTime,
          startLevel: item.startDifficulty,
          endLevel: item.endDifficulty,
        }));
        setData(newData);
        console.log(newData);
      })
      .catch((err) => {
        console.log('에러');
        console.log(err);
      });
  }, []);

  return (
    <ScrollMenu
      LeftArrow={LeftArrowTest('16rem')}
      RightArrow={RightArrowTest('16rem')}
    >
      {data.map((item, idx) => {
        return (
          <Link href="/dashboard/ready" key={idx}>
            <LevelTestCard
              testTypename={item.testTypename}
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
