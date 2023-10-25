import Link from 'next/link';

export default function DashboardHeader() {
  return (
    <>
      <header className="text-gray-600 body-font ">
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
            <Link href="/dashboard" className="mr-[2rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
              >
                <path d="M4.068,18H19.724a3,3,0,0,0,2.821-4.021L19.693,6.094A8.323,8.323,0,0,0,11.675,0h0A8.321,8.321,0,0,0,3.552,6.516l-2.35,7.6A3,3,0,0,0,4.068,18Z" />
                <path d="M7.1,20a5,5,0,0,0,9.8,0Z" />
              </svg>
            </Link>
            <Link href="/dashboard/mypage" className="mr-[1rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
              >
                <path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z" />
                <circle cx="12" cy="6" r="6" />
              </svg>
            </Link>
          </nav>
        </div>
      </header>
      <hr />
    </>
  );
}
