import Image from 'next/image';

import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import LandingIcon from '@/assets/landing/landingIcon';
// import BackgroundYellowCircle from '@/assets/landing/backgroundYellowCircle';
// import BackgroundRedCircle from '@/assets/landing/backgroundRedCircle';
import BackgroundRedCircle from '@/assets/landing/backgroundRedCircle.png';
import BackgroundYellowCircle from '@/assets/landing/backgroundYellowCircle.png';

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-black">
      <Header />
      <div className="flex flex-col justify-center items-center text-white py-[4rem]">
        <div className="text-[3.5rem] font-black mb-[2rem]">
          IT업계를 위한 최고의 솔루션
        </div>
        <div className="flex flex-col items-center mb-[5rem]">
          <div>모랜디는 가장 실전의 유사한 경험을 제공하여</div>
          <div>IT 업계 취업에 가장 필수적인 경험을 제공합니다.</div>
        </div>
        <LandingIcon />
      </div>
      <Footer />
      <Image
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
      />
    </main>
  );
}
