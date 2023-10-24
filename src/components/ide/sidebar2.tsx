import Gap from '@/utils/gap';

function CodingSHIcon() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.1429 1.71429H2.85714C2.225 1.71429 1.71429 2.225 1.71429 2.85714V29.1429C1.71429 29.775 2.225 30.2857 2.85714 30.2857H29.1429C29.775 30.2857 30.2857 29.775 30.2857 29.1429V2.85714C30.2857 2.225 29.775 1.71429 29.1429 1.71429ZM27.7143 27.7143H4.28572V4.28572H27.7143V27.7143Z"
        fill="#333333"
      />
      <path
        d="M4.28571 27.7143H27.7143V4.28571H4.28571V27.7143ZM16.4107 19.75H23.0179C23.1643 19.75 23.2857 19.8786 23.2857 20.0357V21.75C23.2857 21.9071 23.1643 22.0357 23.0179 22.0357H16.4107C16.2643 22.0357 16.1429 21.9071 16.1429 21.75V20.0357C16.1429 19.8786 16.2643 19.75 16.4107 19.75ZM8.71428 19.5107C8.71428 19.4286 8.75357 19.3464 8.81786 19.2929L12.7393 16L8.81786 12.7071C8.78503 12.6812 8.75861 12.6481 8.74065 12.6103C8.72269 12.5725 8.71367 12.5311 8.71428 12.4893V10.25C8.71428 10.0071 8.99643 9.875 9.18214 10.0321L16.0393 15.7786C16.1786 15.8929 16.1786 16.1036 16.0393 16.2179L9.18214 21.9679C8.99643 22.125 8.71428 21.9929 8.71428 21.75V19.5107Z"
        fill="#E6E6E6"
      />
      <path
        d="M9.18214 21.9679L16.0393 16.2179C16.1786 16.1036 16.1786 15.8929 16.0393 15.7786L9.18214 10.0321C9.14075 9.99694 9.09012 9.97436 9.03627 9.96707C8.98242 9.95979 8.92761 9.96811 8.87835 9.99104C8.82909 10.014 8.78745 10.0506 8.75837 10.0965C8.72928 10.1424 8.71398 10.1957 8.71428 10.25V12.4893C8.71428 12.575 8.75 12.6536 8.81785 12.7071L12.7393 16L8.81785 19.2929C8.78593 19.3196 8.76015 19.3529 8.74228 19.3905C8.7244 19.4281 8.71485 19.4691 8.71428 19.5107V21.75C8.71428 21.9929 8.99643 22.125 9.18214 21.9679ZM16.1429 21.75C16.1429 21.9071 16.2643 22.0357 16.4107 22.0357H23.0179C23.1643 22.0357 23.2857 21.9071 23.2857 21.75V20.0357C23.2857 19.8786 23.1643 19.75 23.0179 19.75H16.4107C16.2643 19.75 16.1429 19.8786 16.1429 20.0357V21.75Z"
        fill="#333333"
      />
    </svg>
  );
}

interface ProblemInfoType {
  problem_title: string;
  problem_description: string;
  problem_input: string;
  problem_output: string;
  input_sample: Array<string>;
  output_sample: Array<string>;
}

export default function SideBar({
  problemId,
  setProblemId,
  problemInfo,
  isSolved,
}: {
  problemId: any;
  setProblemId: any;
  problemInfo: Array<ProblemInfoType>;
  isSolved: Array<boolean>;
}) {
  return (
    <div className="flex flex-col items-center w-[12vw] h-[100vh] bg-[#2E3642]">
      <Gap hSize="1.5rem" />
      <CodingSHIcon />
      <Gap hSize="1.5rem" />
      <hr className=" border-[1px] border-gray-500  w-[4rem]" />
      <Gap hSize="2rem" />
      {/* 문제 이동 버튼 */}
      {problemInfo.map((_, idx) => (
        <div
          className="flex flex-col items-center justify-center mb-[1rem] "
          key={idx + 100}
        >
          <div
            className={`flex flex-col items-center justify-center mb-[0.2rem] h-[3.5rem] w-[4rem] text-[1.3rem] font-bold border border-gray-500 text-gray-100 rounded-xl  cursor-pointer ${
              problemId === idx + 1 ? 'bg-gray-500' : ''
            }`}
            onClick={() => {
              console.log(idx + 1);
              setProblemId(idx + 1);
            }}
          >
            {idx + 1}
          </div>
          <div
            className={`text-[0.9rem] ${
              isSolved[idx] ? 'text-green-500' : 'text-white text-opacity-30'
            }`}
          >
            {isSolved[idx] ? '해결' : '미해결'}
          </div>
        </div>
      ))}
    </div>
  );
}
