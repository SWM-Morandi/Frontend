'use client';

import React from 'react';

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className="ml-[50px] mr-[50px]"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </div>
    </>
  );
}
