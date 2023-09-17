import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="relative text-white body-font z-20">
        <div className="mx-[18rem] flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center mb-4 md:mb-0"
          >
            <span className="ml-3 text-[2rem] font-black">모랜디</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/signin" className="mr-[2rem] hover:text-[#FFA935]">
              로그인
            </Link>
            <Link
              href="/signup"
              className="flex flex-row items-center justify-center mr-5 px-[1rem] py-[0.6rem] bg-white hover:bg-[#FFA935] text-black  rounded"
            >
              회원가입
              <svg
                className="w-3 h-3 fill-current text-gray-600 shrink-0 ml-2 -mr-1"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
