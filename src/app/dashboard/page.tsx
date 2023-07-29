import React from 'react';

import Header from '@/components/dashboard/header';
import Footer from '@/components/dashboard/footer';
import CodingTestCard from '@/components/dashboard/codingTestCard';
import Link from 'next/link';

import {
  CodingTestCardScroll,
  AlgorithmCardScroll,
} from '@/components/dashboard/scrollMenu';

import Gap from '@/utils/gap';
import Text from '@/utils/text';

export default function Main() {
  return (
    <main>
      <Header></Header>
      <Gap hSize="3rem" />
      {/* 최근 1주일간 응시한 코딩테스트 카드 스크롤 */}
      <div className="flex flex-col px-[3rem]">
        <Text size="1.5rem" bold="bold">
          최근에 푼 문제
        </Text>
        <div className="flex flex-row ">
          <Link href="/dashboard/ready">
            <CodingTestCard
              companyName={`네이버`}
              problemCount={4}
              time={2}
              startLevel="S3"
              endLevel="G3"
            />
          </Link>
          <Link href="/dashboard/ready">
            <CodingTestCard
              companyName={`당근마켓`}
              problemCount={4}
              time={2}
              startLevel="S3"
              endLevel="G3"
            />
          </Link>
        </div>
      </div>
      <Gap hSize="3rem" />

      {/* 사용자 분석 후 추천 코딩테스트 카드 스크롤 */}
      <div className="px-[3rem]">
        <Text size="1.5rem" bold="bold">
          사용자에게 추천하는 코딩테스트
        </Text>
        <CodingTestCardScroll />
      </div>
      <Gap hSize="3rem" />

      {/* 기업별 코딩테스트 카드 스크롤 */}
      <div className="px-[3rem]">
        <Text size="1.5rem" bold="bold">
          기업별 코딩테스트
        </Text>
        <CodingTestCardScroll />
      </div>
      <Gap hSize="3rem" />

      {/* 알고리즘 학습 문제 셋 */}
      <div className="px-[3rem]">
        <Text size="1.5rem" bold="bold">
          알고리즘 분류별 공부하기
        </Text>
        <AlgorithmCardScroll />
      </div>
      <Gap hSize="6rem" />

      <Footer />
    </main>
  );
}
