import Link from 'next/link';
import Footer from '@/components/landing/footer';
import SignUpBox from '@/components/auth/signUpBox';

export default function SingUp() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <div className="text-[5rem] font-black">모랜디</div>
        <div className="text-[1.5rem] font-bold">모두의 랜덤 디펜스</div>
        <div className="my-[2rem]">
          <SignUpBox />
        </div>
        <div className="mb-[2rem] text-gray-500">또는</div>
        <Link href="signin" className="text-[1.2rem]">
          로그인
        </Link>
      </div>
      <Footer />
    </>
  );
}
