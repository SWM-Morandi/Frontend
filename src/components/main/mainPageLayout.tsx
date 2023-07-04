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
      <Content style={{ padding: '50px 50px', color: 'black' }}>
        <div>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}
