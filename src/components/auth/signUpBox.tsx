import Link from 'next/link';
import GoogleIcon from '@/assets/icons/googleIcon';
import NaverIcon from '@/assets/icons/naverIcon';
import GithubIcon from '@/assets/icons/githubIcon';

export default function SignUpBox() {
  return (
    <>
      <Link href="/dashboard">
        <div className="flex flex-row justify-center items-center h-[4rem] w-[27rem] bg-[#F7F7FA] rounded-2xl text-black text-[1.2rem] mb-[1rem]">
          <GoogleIcon />
          <div className="ml-[0.5rem]">구글로 회원가입하기</div>
        </div>
      </Link>
      <Link href="/dashboard">
        <div className="flex flex-row justify-center items-center h-[4rem] w-[27rem] bg-[#03C75A] rounded-2xl text-white text-[1.2rem] mb-[1rem]">
          <NaverIcon />
          <div className="ml-[0.5rem]">네이버로 회원가입하기</div>
        </div>
      </Link>
      <Link href="/dashboard">
        <div className="flex flex-row justify-center items-center h-[4rem] w-[27rem] bg-gray-900 rounded-2xl text-white text-[1.2rem]">
          <GithubIcon />
          <div className="ml-[0.5rem]">깃허브로 회원가입하기</div>
        </div>
      </Link>
    </>
  );
}
