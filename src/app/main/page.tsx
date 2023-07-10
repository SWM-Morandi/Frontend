import React from 'react';

import Header from '../../components/main/mainHeader';
import Content from '../../components/main/mainContent';
import Footer from '../../components/main/mainFooter';
import Card from '../../components/main/codingTestCard';
import Link from 'next/link';

import {
  CodingTestCardScroll,
  AlgorithmCardScroll,
  MainScroll,
} from '../../components/main/scrollMenu';

export default function Main() {
  return (
    <main>
      <Header></Header>

      <div className="flex flex-col pl-[50px] pr-[50px]">
        <div className="text-[30px]">최근에 푼 문제</div>
        <div className="flex flex-row ">
          <Link href="/main/coding-test/before">
            <Card />
          </Link>
          <Card />
        </div>
      </div>

      <div className="mt-[30px]" />

      <div className="pl-[50px] pr-[50px]">
        <div className="text-[30px]">사용자에게 추천하는 코딩테스트</div>
        <MainScroll />
      </div>

      <div className="mt-[30px]" />

      <div className="pl-[50px] pr-[50px]">
        <div className="text-[30px]">기업별 코딩테스트</div>
        <CodingTestCardScroll />
      </div>

      <div className="mt-[30px]" />

      <div className="pl-[50px] pr-[50px]">
        <div className="text-[30px]">알고리즘 분류별 공부하기</div>
        <AlgorithmCardScroll />
      </div>
      <Footer />
    </main>
  );
}

// 연습
