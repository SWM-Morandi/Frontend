import Link from 'next/link';

export default function LandingHeader() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/main"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">모랜디</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/main" className="mr-5 hover:text-gray-900">
              혼랜디
            </Link>
            <Link href="/main" className="mr-5 hover:text-gray-900">
              모랜디
            </Link>
          </nav>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/main" className="mr-5 hover:text-gray-900">
              알림 아이콘
            </Link>
            <Link href="/main/mypage" className="mr-5 hover:text-gray-900">
              사용자 아이콘
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
