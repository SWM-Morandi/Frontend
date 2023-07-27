export default function SideBar({
  ocSideProblemsBar,
}: {
  ocSideProblemsBar: any;
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
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <>
              <div
                className="flex flex-row justify-between px-[1.5rem] py-[0.8rem]"
                key={idx}
              >
                <div className="flex flex-row mr-[2rem]">
                  <div className="mr-[1rem]">{idx + 1}</div>
                  <div>문제 타이틀을 넣어주세요.</div>
                </div>
                {idx % 2 === 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 507.506 507.506"
                    width="20"
                    fill="#F04452"
                  >
                    <g>
                      <path d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z" />
                    </g>
                  </svg>
                )}
              </div>
            </>
          ))}
      </div>
    </>
  );
}
