import Image from 'next/image';

import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import LandingIcon from '@/assets/landing/landingIcon';
import BackgroundRedCircle from '@/assets/landing/backgroundRedCircle.png';
import BackgroundYellowCircle from '@/assets/landing/backgroundYellowCircle.png';

import Gap from '@/utils/gap';

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-black">
      <Header />

      <div className="flex flex-col justify-center items-center text-white py-[4rem]">
        <h1 className="text-[4.5rem] font-black leading-tighter tracking-tighter">
          IT 기업 코딩테스트 합격을 위한
        </h1>
        <span className="text-[4.5rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FFD459] to-[#FF5F84] mb-[1rem] ">
          최고의 솔루션
        </span>
        <div className="flex flex-col items-center text-[1.2rem] text-gray-300 mb-[2rem]">
          <div>
            모랜디는 '누구나 부담없이 코딩테스트를 칠 수 있다'라는 비전으로 언제
            어디서나 실전 경험을 하고,
          </div>
          <div>
            원하는 기업의 코딩테스트를 합격할 수 있도록 서비스를 제공하고
            있습니다.
          </div>
        </div>
        <div className="flex flex-row mb-[5rem]">
          <div className="flex items-center justify-center bg-[#FFFFFF] hover:bg-gray-200 text-black px-[2.5rem] py-[0.6rem] cursor-pointer rounded">
            경험하기
          </div>
          <Gap wSize="1rem" />
          <div className="flex items-center justify-center bg-[#FF5F84] hover:bg-[#C43C45] px-[2.5rem] py-[0.6rem] cursor-pointer rounded">
            더 알아보기
          </div>
        </div>
        <LandingIcon />
      </div>
      <Footer />
      {/* <Image
        src={BackgroundYellowCircle}
        alt="사진"
        width="1000"
        className="absolute -top-[15rem] right-0 animate-spin-very-slow"
      />
      <Image
        src={BackgroundRedCircle}
        alt="사진"
        width="750"
        className="absolute top-[10rem] left-[7rem] animate-spin-slow"
      /> */}
    </main>
  );
}
