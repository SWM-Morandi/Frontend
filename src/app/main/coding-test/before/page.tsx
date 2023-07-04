import Link from 'next/link';

export default function CodingTestBeforePage() {
  return (
    <>
      <div className="flex flex-col h-screen bg-white text-black">
        <div className="flex flex-row items-start mt-[5vh] ml-[5vw]">
          <Link href="/main">
            <div>나가기</div>
          </Link>
        </div>

        <div className="flex items-end justify-center mt-[25vh]">
          <div className="h-[18rem] w-[42rem] bg-slate-500">
            <h4>네이버 코딩테스트</h4>
            <h6>문제 수: 4문제 | 시험 시간: 2시간 | 난의도: S3 ~ G3</h6>
            <ul>문제 출제 유형: 그리디, DP</ul>
            <ul>사용자 평균 정답률: 61%</ul>
          </div>
        </div>
        <div className="flex items-start justify-center mt-[10px]">
          <Link href="/main/ide">
            <button className=" h-[3rem] w-[42rem] bg-slate-500 ">
              입장하기
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
