'use client';

import React from 'react';
import Image from 'next/image';
import step1 from '@/assets/chrome-image/step1.png';
import step2 from '@/assets/chrome-image/step2.png';
import step3 from '@/assets/chrome-image/step3.png';
import step4 from '@/assets/chrome-image/step4.png';
import Gap from '@/utils/gap';

import { axiosInstance } from '@/api/axiosSetting';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

const RandomDefenseGuide = () => {
  const [bojId, setBojId] = useState('');
  const router = useRouter();

  const inputBojId = async () => {
    try {
      await axiosInstance.post(
        `/members/register-info`,
        { bojId: bojId },
        {
          withCredentials: true,
        },
      );
      router.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article className="flex flex-col w-full items-center page sans">
      <Gap hSize="5rem" />
      <header className="w-[70%] mb-[2rem]">
        <h1 className="page-title text-[3rem] font-bold">
          <strong className="text-red-500">모두의 랜덤 디펜스</strong> 확장
          프로그램 설치 안내
        </h1>
        <p className="page-description"></p>
      </header>
      <div className="page-body flex flex-col items-center w-[70%]">
        <p className="w-[100%] text-[1.3rem]">
          안녕하세요.{' '}
          <strong className="text-blue-500">모두의 랜덤 디펜스</strong>에
          와주셔서 정말 감사합니다 😍😍
        </p>
        <p className="w-[100%] text-[1.3rem]">
          저희 서비스에서는{' '}
          <strong className="text-purple-500">크롬 익스텐션</strong>이 설치되어
          있어야 정상적으로 이용할 수 있습니다 🤗
        </p>
        <p className="w-[100%] text-[1.3rem]">
          아래 순서에 맞춰서 다운로드 이후, 서비스를 이용해주시면 정말
          감사하겠습니다 🙂
        </p>
        <Gap hSize="1rem" />
        {/* Step 1 */}
        <div className="flex flex-wrap items-center justify-between my-8">
          {/* Step 1 Image */}
          <div style={{ width: '50%' }}>
            {/* Replace the image source with your own */}
            <Image src={step1} alt="" />
          </div>

          {/* Step 1 Content */}
          <div style={{ width: '50%' }} className="px-[2.5rem]">
            <div className="flex flex-row items-center mb-4">
              <h3 className="text-3xl font-bold mr-4">설치 페이지</h3>
              <Link
                href="https://chrome.google.com/webstore/detail/%EB%AA%A8%EB%91%90%EC%9D%98-%EB%9E%9C%EB%8D%A4-%EB%94%94%ED%8E%9C%EC%8A%A4-%EC%A0%9C%EC%B6%9C-%EC%9C%A0%ED%8B%B8%EB%A6%AC%ED%8B%B0/ljkmahbkojffhjdjkghaljooajocajnf?hl=ko&authuser=2"
                target="_blank"
              >
                <button className="h-[3.5rem] w-[7rem] text-[1.3rem] font-bold text-white bg-red-400 rounded-xl">
                  이동하기
                </button>
              </Link>
            </div>
            <p className="text-[1.3rem]">
              이동하기 버튼을 클릭하여 이동한 후, 설치페이지에서{' '}
              <strong className="text-red-500">Chrome에 추가</strong>를
              눌러주세요!
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-wrap items-center justify-between my-8">
          {/* Step 2 Content */}
          <div style={{ width: '50%' }} className="px-[2.5rem]">
            <h3 className="text-3xl font-bold mb-4">추가확인</h3>
            <p className="text-[1.3rem]">
              확인 창이 보이면,{' '}
              <strong className="text-red-500">확장 프로그램 추가</strong>를
              눌러주세요!
            </p>
          </div>

          {/* Step 2 Image */}
          <div style={{ width: '50%' }}>
            {/* Replace the image source with your own */}
            <Image src={step2} alt="" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-wrap items-center justify-between my-8">
          {/* Step 3 Image */}
          <div style={{ width: '50%' }}>
            {/* Replace the image source with your own */}
            <Image src={step3} alt="" />
          </div>

          {/* Step 3 Content */}
          <div style={{ width: '50%' }} className="px-[2.5rem]">
            <h3 className="text-3xl font-bold mb-4">설치 완료</h3>
            <p className="text-[1.3rem]">
              설치 완료 창이 보이시면{' '}
              <strong className="text-red-500">
                확장 프로그램 관리 페이지
              </strong>
              로 이동해주세요!
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-wrap items-center justify-between my-8">
          {/* Step 4 Content */}
          <div style={{ width: '50%' }} className="px-[2.5rem]">
            <h3 className="text-3xl font-bold mb-4">프로그램 실행 확인</h3>
            <p className="text-[1.3rem]">
              모두의 랜덤 디펜스 <strong>확장 프로그램이 활성화</strong>가
              되어있는지 확인해주세요! 🙂
            </p>
          </div>

          {/* Step 4 Image */}
          <div style={{ width: '50%' }}>
            {/* Replace the image source with your own */}
            <Image src={step4} alt="" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default RandomDefenseGuide;
