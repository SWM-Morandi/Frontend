import React from 'react';

import Header from '../../components/main/mainHeader';
import Content from '../../components/main/mainContent';
import Footer from '../../components/main/mainFooter';
import Card from '../../components/main/mainCard';
import Link from 'next/link';

export default function Main() {
  return (
    <main>
      <Header></Header>
      <Content>
        <div>최근에 푼 문제</div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Link href="/main/coding-test/before">
            <Card />
          </Link>
          <Card />
        </div>

        <div>사용자에게 추천하는 코딩테스트</div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div>기업별 코딩테스트</div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div>알고리즘 분류별 공부하기</div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Content>
      <Footer />
    </main>
  );
}

// 연습
