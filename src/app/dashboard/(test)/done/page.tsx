import Link from 'next/link';
import TestResultBox from '@/components/codingtest/testResultBox';

export default function CodingTestBeforePage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-[#191F28]">
        <div className="flex flex-col justify-center items-center h-[25rem] w-[80vw] bg-white rounded-2xl">
          <div className="text-[30px] my-[1rem]">시험 결과</div>
          <TestResultBox />
          <Link
            href="/dashboard"
            className="flex justify-center items-center mt-[3rem] mb-[1rem] h-[3rem] w-[30rem] bg-[#F04452] rounded-2xl text-white cursor-pointer"
          >
            종료하기
          </Link>
        </div>
      </div>
    </>
  );
}
