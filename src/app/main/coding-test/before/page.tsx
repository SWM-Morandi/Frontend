import Link from 'next/link';

export default function CodingTestBeforePage() {
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-white text-black">
        <div className="flex flex-row items-start w-[100vw] mt-[5vh] pl-[5vw]">
          <Link href="/main">
            <div>나가기</div>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center mt-[25vh] h-[18rem] w-[42rem] border-2 border-black rounded-2xl">
          <div>
            <h4 className="text-[30px]">네이버 코딩테스트</h4>
            <div className="mt-[20px]" />
            <h6>문제 수: 4문제 | 시험 시간: 2시간 | 난의도: S3 ~ G3</h6>
            <div className="mt-[15px]" />
            <ul>문제 출제 유형: 그리디, DP</ul>
            <ul>사용자 평균 정답률: 61%</ul>
          </div>
        </div>
        <div className="mt-[3vh]" />
        <Link href="/main/ide">
          <button className=" h-[3rem] w-[42rem] border-2 border-black rounded-2xl">
            입장하기
          </button>
        </Link>
      </div>
    </>
  );
}
