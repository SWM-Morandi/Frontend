import Link from 'next/link';

export default function LoginBox() {
  return (
    <>
      <div className="flex items-end justify-center">
        <div className="flex flex-col items-center justify-center h-[30rem] w-[42rem] bg-[#FBFBFB] rounded-lg drop-shadow-lg backdrop-blur">
          <h1 className="text-[2rem] mb-[20px]">모랜디</h1>
          <h6 className="text-[1.2rem] mb-[30px]">모두의 랜덤 디펜스</h6>
          <Link href="/auth/login">
            <button className="h-[3rem] w-[26rem] bg-[#06C45A] rounded-lg drop-shadow-md mb-[20px]">
              네이버 계정으로 회원가입 하기
            </button>
          </Link>
          <Link href="/auth/login">
            <button className="h-[3rem] w-[26rem] bg-[#FAE209] rounded-lg drop-shadow-md mb-[20px]">
              구글 계정으로 회원가입 하기
            </button>
          </Link>
          <Link href="/auth/login">
            <button className="h-[3rem] w-[26rem] bg-[#FBFBFB] rounded-lg drop-shadow-md mb-[20px]">
              깃허브 계정으로 회원가입 하기
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
