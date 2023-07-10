'use client';

import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './scroll.css';
import Link from 'next/link';

import CodingTestCard from './codingTestCard';
import AlgorithmCard from './algorithmCard';
import MainCard from './mainCard';

function LeftArrow() {
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
        left: '50px',
        height: '320px',
        width: '50px',
        zIndex: '999',
        backgroundColor: 'gray',
      }}
    >
      ←
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

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
        right: '50px',
        height: '320px',
        width: '50px',
        zIndex: '999',
        backgroundColor: 'gray',
      }}
    >
      →
    </button>
  );
}

export function MainScroll() {
  return (
    <>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {Array(10)
          .fill(0)
          .map((_, idx) => {
            return (
              <Link href="/main/coding-test/before" key={idx}>
                <MainCard />
              </Link>
            );
          })}
      </ScrollMenu>
    </>
  );
}

export function CodingTestCardScroll() {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {Array(10)
        .fill(0)
        .map((_, idx) => {
          return (
            <Link href="/main/coding-test/before" key={idx}>
              <CodingTestCard
                componey={`네이버${idx}`}
                problemCount={4}
                time={2}
                startLevel="S3"
                endLevel="G3"
              />
            </Link>
          );
        })}
    </ScrollMenu>
  );
}

export function AlgorithmCardScroll() {
  return (
    <>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {Array(10)
          .fill(0)
          .map((_, idx) => {
            return (
              <Link href="/main/problem-set" key={idx}>
                <AlgorithmCard />
              </Link>
            );
          })}
      </ScrollMenu>
    </>
  );
}
