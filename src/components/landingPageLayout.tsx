'use client';

import React from 'react';
import { Layout } from 'antd';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

export default function LandingPageLayout({
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
          <Link href="/">모랜디</Link>
        </div>
        <div style={{}}>
          <Link href="login">로그인</Link>
          <Link href="join">회원가입</Link>
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
