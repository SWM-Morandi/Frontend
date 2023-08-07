interface ProblemInfoType {
  problem_title: string;
  problem_description: string;
  problem_input: string;
  problem_output: string;
  input_sample: Array<string>;
  output_sample: Array<string>;
}

export default function SideBar({
  ocSideProblemsBar,
  problemId,
  setProblemId,
  problemInfo,
}: {
  ocSideProblemsBar: any;
  problemId: any;
  setProblemId: any;
  problemInfo: Array<ProblemInfoType>;
}) {
  return (
    <>
      <div className="flex flex-col w-[22rem] h-[100vh] absolute z-10 bg-white text-[black]">
        <div className="flex flex-row justify-between px-[1.5rem] my-[2rem]">
          <div className="text-[20px]">Problem Set</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.021 512.021"
            width="20"
            className="cursor-pointer"
            onClick={ocSideProblemsBar}
          >
            <g>
              <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z" />
            </g>
          </svg>
        </div>
        {problemInfo.map((_, idx) => (
          <div
            className="flex flex-row justify-between px-[1.5rem] py-[0.8rem]"
            onClick={() => {
              console.log(idx + 1);
              setProblemId(idx + 1);
              ocSideProblemsBar();
            }}
            key={idx + 100}
          >
            <div className="flex flex-row mr-[2rem]">
              <div className="mr-[1rem]">{idx + 1}</div>
              <div>{problemInfo[idx].problem_title}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
