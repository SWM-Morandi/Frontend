import Gap from '@/utils/gap';

interface CodingTestInfoProps {
  testTime: number | undefined;
  problemCount: number | undefined;
  startDifficulty: string | undefined;
  endDifficulty: string | undefined;
  averageCorrectAnswerRate: number | undefined;
  frequentTypes: string | undefined;
}

export default function CodintTestInfo({
  testTime,
  problemCount,
  startDifficulty,
  endDifficulty,
  averageCorrectAnswerRate,
  frequentTypes,
}: CodingTestInfoProps) {
  return (
    <>
      {/* 코딩테스트 정보 */}
      <div className="flex flex-row justify-around w-[80%] py-[1rem] rounded-2xl bg-gray-200">
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-400">문제수</div>
          <div>{problemCount}문제</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-400">시험시간</div>
          <div>{testTime}분</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-400">난이도</div>
          <div>
            {startDifficulty} ~ {endDifficulty}
          </div>
        </div>
      </div>
      <Gap hSize="1.4rem" />

      {/* 코딩테스트 출제 유형 정보 */}
      <div className="flex flex-row justify-between w-[80%]">
        <div className="text-[#8B95A1]">문제 출제 유형</div>
        <div>{frequentTypes}</div>
      </div>
      <Gap hSize="0.4rem" />

      {/* 코딩테스트 평균 정답률 */}
      <div className="flex flex-row justify-between w-[80%]">
        <div className="text-[#8B95A1]">사용자 평균 정답률</div>
        <div>{averageCorrectAnswerRate}%</div>
      </div>
    </>
  );
}
