import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/landing/footer';
import SignUpBox from '@/components/auth/signInBox';
import Logo from '@/assets/blackMorandiLogo.svg';

export default function SingUp() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <Image src={Logo} width={220.5} height={130.5} alt={'로고'} />
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
