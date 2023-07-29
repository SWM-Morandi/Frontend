import Link from 'next/link';
import TestResultBox from '@/components/codingtest/testResultBox';
import Gap from '@/utils/gap';

function Button({ text }: { text: string }) {
  return (
    <Link
      href="/dashboard"
      className="flex justify-center items-center h-[3rem] w-[30rem] bg-[#F04452] rounded-2xl text-white cursor-pointer"
    >
      {text}
    </Link>
  );
}

export default function CodingTestBeforePage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-[#191F28]">
        <div className="flex flex-col justify-center items-center h-[25rem] w-[80vw] bg-white rounded-2xl">
          {/* 시험 결과 제목 */}
          <div className="text-[30px]">시험 결과</div>
          <Gap hSize="1rem" />

          {/* 시험 결과 정보 테이블 */}
          <TestResultBox />
          <Gap hSize="3rem" />

          {/* 종료하기 버튼 */}
          <Button text="종료하기" />
        </div>
      </div>
    </>
  );
}
