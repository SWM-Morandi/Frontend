import Gap from '@/utils/gap';

export default function CodintTestInfo() {
  return (
    <>
      {/* 코딩테스트 정보 */}
      <div className="flex flex-row justify-around w-[80%] py-[1rem] rounded-2xl bg-gray-200">
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-400">문제수</div>
          <div>4문제</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-400">시험시간</div>
          <div>2시간</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-400">난의도</div>
          <div>S3 ~ G3</div>
        </div>
      </div>
      <Gap hSize="1.4rem" />

      {/* 코딩테스트 출제 유형 정보 */}
      <div className="flex flex-row justify-between w-[80%]">
        <div className="text-[#8B95A1]">문제 출제 유형</div>
        <div>문제 출제 유형: 그리디, 다이나믹 프로그래밍, DFS와 BFS</div>
      </div>
      <Gap hSize="0.4rem" />

      {/* 코딩테스트 평균 정답률 */}
      <div className="flex flex-row justify-between w-[80%]">
        <div className="text-[#8B95A1]">사용자 평균 정답률</div>
        <div>61%</div>
      </div>
    </>
  );
}
