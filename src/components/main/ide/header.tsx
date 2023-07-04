import Link from 'next/link';
import css from 'styled-jsx/css';

export default function IdeHeader() {
  return (
    <>
      <div className="flex justify-between items-center bg-slate-500 pl-[20px] pr-[20px]">
        <div>모랜디 Problem Set</div>
        <div>
          00:00:00 시계
          <Link href="/main/coding-test/after"> 종료하기</Link>
        </div>
      </div>
    </>
  );
}
