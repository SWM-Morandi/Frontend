import Header from '../components/landing/header';
import Footer from '../components/landing/footer';
import LandingIcon from './landingIcon';

export default function Page() {
  return (
    <main>
      <Header />
      <div className="flex flex-col justify-center items-center text-white bg-black py-[4rem]">
        <div className="text-[3.5rem] font-black mb-[2rem]">
          IT업계를 위한 최고의 솔루션
        </div>
        <div className="mb-[5rem]">
          <div>모랜디는 가장 실전의 유사한 경험을 제공하여</div>
          <div>IT 업계 취업에 가장 필수적인 경험을 제공합니다.</div>
        </div>
        <LandingIcon />
      </div>
      <Footer />
    </main>
  );
}
