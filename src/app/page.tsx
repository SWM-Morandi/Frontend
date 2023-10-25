import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import LandingIcon from '@/assets/landing/landingIcon';
import LandingIcon2 from '@/assets/landing/landingIcon2';
import BackgroundRedCircle from '@/assets/landing/backgroundRedCircle.png';
import BackgroundYellowCircle from '@/assets/landing/backgroundYellowCircle.png';

import Gap from '@/utils/gap';

import Scroll from '@/components/landing/scroll';

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-black">
      <Header />

      <div className="relative z-20 flex flex-col justify-center items-center text-white py-[4rem]">
        <h1 className="text-[1.8rem] md:text-[4.5rem] font-black leading-tighter tracking-tighter">
          IT 기업 코딩테스트 합격을 위한
        </h1>
        <span className="text-[3.5rem] md:text-[5rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FFD459] to-[#FF5F84] mb-[1rem] md:leading-[0.9]">
          최고의 솔루션
        </span>
        <div className="flex flex-col items-center text-[1rem] md:text-[1.2rem] text-gray-300 mb-[2rem]">
          <div className="flex flex-col md:flex-row items-center">
            <p>모랜디는 '누구나 부담없이 코딩테스트를 칠 수 있다'라는&nbsp;</p>
            <p>비전으로 언제 어디서나 실전 경험을 하고,</p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <p>원하는 기업의 코딩테스트를 합격할 수 있도록&nbsp;</p>
            <p>서비스를 제공하고 있습니다.</p>
          </div>
        </div>
        <div className="flex flex-row mb-[5rem]">
          <Link
            href="/signin"
            className="flex items-center justify-center bg-[#FFFFFF] hover:bg-gray-200 text-black px-[2.5rem] py-[0.6rem] cursor-pointer rounded"
          >
            경험하기
          </Link>
          <Gap wSize="1rem" />
          <Link
            href="/signin"
            className="flex items-center justify-center bg-[#FF5F84] hover:bg-[#C43C45] px-[2.5rem] py-[0.6rem] cursor-pointer rounded"
          >
            더 알아보기
          </Link>
        </div>
        <div className="invisible h-0 md:visible md:h-[668.8px]">
          <LandingIcon />
        </div>
        <div className="visible h-[327.6px] md:invisible md:h-0">
          <LandingIcon2 />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-[6rem] bg-gray-100">
        <div className="text-[1.7rem] font-semibold">2023.07.01 기준</div>
        <div className="text-[2.6rem] mb:text-[3.5rem] text-gray-900 font-black">
          모의 코딩테스트 기업
        </div>
        <div className="text-[4.6rem] text-[#F11C76] font-black">6 개</div>
        <Gap hSize="1rem" />
        <div className="text-[1.5rem] text-gray-600 font-semibold">
          직접 '모의 코딩테스트'를 경험해보세요.
        </div>
        {/* <Gap hSize="5rem" /> */}
        <Scroll />
      </div>
      <Footer />
      <Image
        src={BackgroundYellowCircle}
        alt="사진"
        width="1000"
        className="absolute top-[10rem] right-0 animate-spin-very-slow"
      />
      <Image
        src={BackgroundRedCircle}
        alt="사진"
        width="750"
        className="absolute top-[10rem] left-[7rem] animate-spin-slow"
      />
    </main>
  );
}
