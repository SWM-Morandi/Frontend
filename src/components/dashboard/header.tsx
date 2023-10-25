import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/morandi-logos/blackMorandiLogo.svg';

export default function DashboardHeader() {
  return (
    <>
      <header className="text-gray-600 body-font ">
        <div className=" mx-[3rem] flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/dashboard"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image src={Logo} width={117.6} height={69.6} alt={'로고'} />
          </Link>
          {/* <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/dashboard" className="mr-5 hover:text-gray-900">
              혼랜디
            </Link>
            <Link href="/dashboard" className="mr-5 hover:text-gray-900">
              모랜디
            </Link>
          </nav> */}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <Link href="/dashboard" className="mr-[2rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
              >
                <path d="M4.068,18H19.724a3,3,0,0,0,2.821-4.021L19.693,6.094A8.323,8.323,0,0,0,11.675,0h0A8.321,8.321,0,0,0,3.552,6.516l-2.35,7.6A3,3,0,0,0,4.068,18Z" />
                <path d="M7.1,20a5,5,0,0,0,9.8,0Z" />
              </svg>
            </Link> */}
            <Link href="/dashboard/mypage" className="mr-[1rem]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.375 24.9857C27.7013 23.3899 26.7236 21.9404 25.4964 20.7179C24.273 19.4918 22.8237 18.5143 21.2286 17.8393C21.2143 17.8322 21.2 17.8286 21.1857 17.8214C23.4107 16.2143 24.8571 13.5964 24.8571 10.6429C24.8571 5.75001 20.8929 1.78572 16 1.78572C11.1071 1.78572 7.14285 5.75001 7.14285 10.6429C7.14285 13.5964 8.58928 16.2143 10.8143 17.825C10.8 17.8321 10.7857 17.8357 10.7714 17.8429C9.17142 18.5179 7.73571 19.4857 6.50357 20.7214C5.27753 21.9449 4.30001 23.3942 3.625 24.9893C2.96186 26.5509 2.60422 28.2252 2.57142 29.9214C2.57047 29.9596 2.57716 29.9975 2.59109 30.033C2.60502 30.0685 2.62591 30.1008 2.65254 30.1281C2.67917 30.1554 2.71099 30.1771 2.74612 30.1919C2.78126 30.2067 2.81901 30.2143 2.85714 30.2143H5C5.15714 30.2143 5.28214 30.0893 5.28571 29.9357C5.35714 27.1786 6.46428 24.5964 8.42142 22.6393C10.4464 20.6143 13.1357 19.5 16 19.5C18.8643 19.5 21.5536 20.6143 23.5786 22.6393C25.5357 24.5964 26.6429 27.1786 26.7143 29.9357C26.7179 30.0929 26.8429 30.2143 27 30.2143H29.1429C29.181 30.2143 29.2187 30.2067 29.2539 30.1919C29.289 30.1771 29.3208 30.1554 29.3475 30.1281C29.3741 30.1008 29.395 30.0685 29.4089 30.033C29.4228 29.9975 29.4295 29.9596 29.4286 29.9214C29.3929 28.2143 29.0393 26.5536 28.375 24.9857ZM16 16.7857C14.3607 16.7857 12.8179 16.1464 11.6571 14.9857C10.4964 13.825 9.85714 12.2821 9.85714 10.6429C9.85714 9.00358 10.4964 7.46072 11.6571 6.30001C12.8179 5.13929 14.3607 4.50001 16 4.50001C17.6393 4.50001 19.1821 5.13929 20.3429 6.30001C21.5036 7.46072 22.1429 9.00358 22.1429 10.6429C22.1429 12.2821 21.5036 13.825 20.3429 14.9857C19.1821 16.1464 17.6393 16.7857 16 16.7857Z"
                  fill="black"
                />
              </svg>
            </Link>
          </nav>
        </div>
      </header>
      <hr />
    </>
  );
}
