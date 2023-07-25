import Link from 'next/link';

export default function LandingHeader() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className=" mx-[3rem] flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/dashboard"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-[2rem] font-black">모랜디</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/dashboard" className="mr-5 hover:text-gray-900">
              혼랜디
            </Link>
            <Link href="/dashboard" className="mr-5 hover:text-gray-900">
              모랜디
            </Link>
          </nav>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/auth/signin" className="mr-5 hover:text-gray-900">
              로그인
            </Link>
            <Link href="/auth/join" className="mr-5 hover:text-gray-900">
              회원가입
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
