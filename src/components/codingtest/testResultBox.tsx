interface TestResult {
  bojProblemId: number | undefined;
  testProblemId: number | undefined;
  executionTime: number | undefined;
  isSolved: boolean | undefined;
}

export default function TestResultBox({
  testResults,
  bojId,
  beforeRating,
  afterRating,
}: {
  testResults: TestResult[] | undefined;
  bojId: string | undefined;
  beforeRating: number | undefined;
  afterRating: number | undefined;
}) {
  let totalSolved = 0;
  return (
    <>
      <section className="container px-4">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead>
                    <tr className="text-gray-500">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal h-[5rem] w-[20%]"
                      >
                        닉네임
                      </th>
                      {testResults?.map((item, index) => (
                        <>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal"
                            key={index}
                          >
                            {item.testProblemId}. {item.bojProblemId}번
                          </th>
                        </>
                      ))}

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal w-[15%]"
                      >
                        맞은 문제 수
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal w-[15%]"
                      >
                        레이팅 변화
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*dark:divide-gray-700 dark:bg-gray-900*/}
                    <tr className="text-[1.2rem] font-bold">
                      <td>{bojId}</td>
                      {testResults?.map((item, index) => {
                        if (item.isSolved) totalSolved++;
                        return (
                          <td key={index}>
                            {item.isSolved ? (
                              <div className="text-[#12AC79]">Accept</div>
                            ) : (
                              <div className="text-[#F04452]">Fail</div>
                            )}
                            {item.executionTime ? (
                              <div>{item.executionTime}</div>
                            ) : (
                              <div></div>
                            )}
                          </td>
                        );
                      })}
                      <td>{totalSolved} Solve</td>
                      <td>
                        <div
                          className={
                            beforeRating! > afterRating!
                              ? 'text-[#F04452]'
                              : 'text-[#12AC79]'
                          }
                        >
                          {beforeRating} {'->'} {afterRating}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
