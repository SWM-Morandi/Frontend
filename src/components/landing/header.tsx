import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="relative text-white body-font z-20">
        <div className=" mx-[3rem] flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center mb-4 md:mb-0"
          >
            <span className="ml-3 text-[2rem] font-black">모랜디</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/auth/signin" className="mr-5 hover:text-[#FFA935]">
              로그인
            </Link>
            <Link href="/auth/signup" className="mr-5 hover:text-[#FFA935]">
              회원가입
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
