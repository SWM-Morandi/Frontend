export default function TestResultBox() {
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
                      {['A', 'B', 'C', 'D', 'C'].map((item, index) => (
                        <>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal w-[10%]"
                            key={index}
                          >
                            {item}
                          </th>
                        </>
                      ))}

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal w-[30%]"
                      >
                        맞은 문제 수 / 소요시간
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*dark:divide-gray-700 dark:bg-gray-900*/}
                    <tr>
                      <td>yeobi</td>
                      {Array(5)
                        .fill(0)
                        .map((item, index) => (
                          <>
                            <td key={index}>
                              <div className="text-[#12AC79] text-[13px]">
                                Accept
                              </div>
                              <div>0:03</div>
                            </td>
                          </>
                        ))}

                      <td>4 Solve / 184min</td>
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