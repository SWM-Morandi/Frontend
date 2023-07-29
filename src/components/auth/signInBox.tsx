import Link from 'next/link';
import GoogleIcon from '@/assets/icons/googleIcon';
import NaverIcon from '@/assets/icons/naverIcon';
import GithubIcon from '@/assets/icons/githubIcon';
import Gap from '@/utils/gap';

export default function SingInBox() {
  return (
    <>
      {/* 구글 로그인 버튼 */}
      <Link href="/dashboard">
        <div className="flex flex-row justify-center items-center h-[4rem] w-[27rem] bg-[#F7F7FA] rounded-2xl text-black text-[1.2rem]">
          <GoogleIcon />
          <Gap wSize="0.5rem" />

          <div>구글로 로그인하기</div>
        </div>
      </Link>
      <Gap hSize="1rem" />

      {/* 네이버 로그인 버튼 */}
      <Link href="/dashboard">
        <div className="flex flex-row justify-center items-center h-[4rem] w-[27rem] bg-[#03C75A] rounded-2xl text-white text-[1.2rem]">
          <NaverIcon />
          <Gap wSize="0.5rem" />

          <div>네이버로 로그인하기</div>
        </div>
      </Link>
      <Gap hSize="1rem" />

      {/* 깃허브 로그인 버튼 */}
      <Link href="/dashboard">
        <div className="flex flex-row justify-center items-center h-[4rem] w-[27rem] bg-gray-900 rounded-2xl text-white text-[1.2rem]">
          <GithubIcon />
          <Gap wSize="0.5rem" />

          <div>깃허브로 로그인하기</div>
        </div>
      </Link>
    </>
  );
}
