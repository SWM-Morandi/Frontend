import Link from 'next/link';
import Footer from '@/components/landing/footer';
import SignInBox from '@/components/auth/signInBox';

export default function SingIn() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <div className="text-[5rem] font-black">모랜디</div>
        <div className="text-[1.5rem] font-bold">모두의 랜덤 디펜스</div>
        <div className="my-[2rem]">
          <SignInBox />
        </div>
        <div className="mb-[2rem] text-gray-500">
          아직 모랜디 회원이 아니신가요?
        </div>
        <Link href="signup" className="text-[1.2rem]">
          회원가입
        </Link>
      </div>
      <Footer />
    </>
  );
}
