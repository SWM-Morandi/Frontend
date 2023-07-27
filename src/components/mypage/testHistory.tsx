function ArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="#191F28" />
      <path
        d="M12.5456 6.99805L17.561 12.0106L12.6071 16.9617"
        stroke="white"
        strokeWidth="1.12821"
        strokeLinecap="square"
      />
      <path
        d="M16.8995 11.98H6.43793"
        stroke="white"
        strokeWidth="1.12821"
        strokeLinecap="square"
      />
    </svg>
  );
}

function HistoryComp({
  company,
  date,
  solvedCount,
  problemCount,
}: {
  company: string;
  date: string;
  solvedCount: number;
  problemCount: number;
}) {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-[25rem]">
        <div className="flex flex-col">
          <div className="text-[1.5rem] font-bold">{company} 코딩테스트</div>
          <div className="text-gray-500">{date}</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center mr-[1.5rem]">
            <div className="text-[1.3rem] font-bold">{solvedCount}문제</div>
            <div className="text-gray-500">총 {problemCount}문제</div>
          </div>
          <ArrowIcon />
        </div>
      </div>
    </>
  );
}

export default function TestHistory() {
  const date = new Date();

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-start text-[2rem] font-bold w-[55rem] mb-[1.5rem]">
          <div>테스트 기록</div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <HistoryComp
            company="네이버"
            date="2023.06.30"
            solvedCount={15}
            problemCount={22}
          />
          <HistoryComp
            company="삼성"
            date="2023.06.20"
            solvedCount={15}
            problemCount={22}
          />
          <HistoryComp
            company="카카오"
            date="2023.06.10"
            solvedCount={15}
            problemCount={22}
          />
          <HistoryComp
            company="쿠팡"
            date="2023.05.28"
            solvedCount={15}
            problemCount={22}
          />
        </div>
      </div>
    </>
  );
}
