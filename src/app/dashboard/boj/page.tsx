'use client';

import React from 'react';
import Image from 'next/image';
import step1 from '@/assets/chrome-image/step-1-image.png';
import step2 from '@/assets/chrome-image/step-2-image.png';
import step3 from '@/assets/chrome-image/step-3-image.png';
import step4 from '@/assets/chrome-image/step-4-image.png';
import Gap from '@/utils/gap';

import { axiosInstance } from '@/api/axiosSetting';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
          모두의 랜덤 디펜스.. 시작하기에 앞서…
        </h1>
        <p className="page-description"></p>
      </header>
      <div className="page-body flex flex-col items-center w-[70%]">
        <p className="w-[100%] text-[1.3rem]">
          안녕하세요. 개발팀입니다.{' '}
          <strong className="text-blue-500">모두의 랜덤 디펜스</strong>에
          와주셔서 정말 감사합니다!
        </p>
        <p className="w-[100%] text-[1.3rem]">
          서비스를 이용하기에 앞서,{' '}
          <strong className="text-purple-500">백준 아이디</strong>를
          입력해주시면 감사하겠습니다!
        </p>
        <br />
        <div className="flex flex-col justify-center items-center h-[20rem] w-[25rem] inset-0 bg-white border rounded-xl">
          <div className="text-[2rem] font-bold">백준 아이디 입력</div>
          <div className="text-gray-400">백준 아이디를 알려주세요!</div>
          <Gap hSize="2rem" />
          <input
            type="text"
            onChange={(e) => {
              setBojId(e.target.value);
            }}
            className="w-[15rem] h-[2rem] items-center border rounded"
          ></input>
          <Gap hSize="2rem" />
          <button
            onClick={inputBojId}
            className="w-[15rem] h-[2.5rem] items-center bg-[#F04452] text-white rounded"
          >
            입력
          </button>
        </div>
        <br />
        <del className="w-[100%]">
          <p className="w-[100%] text-[1.3rem]">
            서비스를 이용하기에 앞서, 반드시 설치해주셔야하는{' '}
            <strong className="text-purple-500">크롬 익스텐션</strong>이
            있습니다.
          </p>
          <p className="w-[100%] text-[1.3rem]">
            아래 순서에 맞춰서 다운로드 이후, 서비스를 이용해주시면 정말
            감사하겠습니다 🙂
          </p>
        </del>
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
            <h3 className="text-3xl font-bold mb-4">설치 페이지</h3>
            <p>
              <a
                href="https://chrome.google.com/webstore?hl=ko"
                className="text-red-400 text-[1.3rem]"
                target="_blank"
              >
                페이지 이동하기
              </a>
            </p>
            <p className="text-[1.3rem]">
              위 링크를 클릭하여 이동한 후, 설치페이지에서{' '}
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
              모달창이 뜨면,{' '}
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
              다음과 같이 설치 완료가 뜰 것입니다. 이제{' '}
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
              모두의 랜덤 디펜스 확장 프로그램이 활성화가 되어있는지
              확인해주세요! 비활성화 상태라면, 활성화 상태로 만들어주세요 🙂
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
