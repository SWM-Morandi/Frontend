interface TestResult {
  bojProblemId: number;
  testProblemId: number;
  executionTime: number;
  isSolved: boolean;
}

export default function TestResultBox({
  testResults,
  bojId,
}: {
  testResults: TestResult[];
  bojId: string;
}) {
  let totalSolved: number = 0;
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
                      {testResults.map((item, index) => (
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
                        className="px-4 py-3.5 text-sm font-normal w-[20%]"
                      >
                        맞은 문제 수
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*dark:divide-gray-700 dark:bg-gray-900*/}
                    <tr className="text-[1.2rem] font-bold">
                      <td>{bojId}</td>
                      {testResults.map((item, index) => {
                        if (item.isSolved) totalSolved++;
                        return (
                          <td key={index}>
                            {item.isSolved ? (
                              <div className="text-[#12AC79]">Accept</div>
                            ) : (
                              <div className="text-[#F04452]">Fail</div>
                            )}
                            {item.executionTime ? (
                              <div>item.executionTime</div>
                            ) : (
                              <div></div>
                            )}
                          </td>
                        );
                      })}
                      <td>{totalSolved} Solve</td>
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
