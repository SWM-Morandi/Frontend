'use client';

import React from 'react';
import { Layout } from 'antd';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

export default function MainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'white',
        }}
      >
        <div>
          <Link href="/main">모랜디</Link>
          <Link href="/main">혼랜디</Link>
          <Link href="/main">모랜디</Link>
        </div>
        <div>
          <Link href="/main">알림 아이콘 / </Link>
          <Link href="/main/mypage">사용자 아이콘</Link>
        </div>
      </Header>
      <Content style={{ padding: '50px 50px', color: 'black' }}>
        <div>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}
