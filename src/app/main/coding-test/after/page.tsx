import Link from 'next/link';

export default function CodingTestBeforePage() {
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-white text-black">
        <div className="mt-[5vh]" />

        <div className="flex flex-col justify-center items-center mt-[25vh] h-[18rem] w-[42rem] border-2 border-black rounded-2xl">
          <h4 className="text-[30px]">시험 결과</h4>
          <div className="mt-[20px]" />
          <h6>테이블 들어갈 자리</h6>
        </div>

        <div className="mt-[3vh]" />
        <Link href="/main">
          <button className="h-[3rem] w-[42rem] border-2 border-black rounded-2xl">
            종료하기
          </button>
        </Link>
      </div>
    </>
  );
}
