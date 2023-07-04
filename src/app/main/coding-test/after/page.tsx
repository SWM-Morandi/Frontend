import Link from 'next/link';

export default function CodingTestBeforePage() {
  return (
    <>
      <div className="flex flex-col h-screen bg-white text-black">
        <div className="flex flex-row items-start mt-[5vh] ml-[5vw]"></div>

        <div className="flex items-end justify-center mt-[25vh]">
          <div className="h-[18rem] w-[42rem] bg-slate-500">
            <h4>시험 결과</h4>
            결과 테이블 들어갈 자리
          </div>
        </div>
        <div className="flex items-start justify-center mt-[10px]">
          <Link href="/main">
            <button className=" h-[3rem] w-[42rem] bg-slate-500 ">
              종료하기
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
