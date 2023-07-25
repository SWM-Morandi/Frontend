import Header from '../../../components/dashboard/mainHeader';
import Footer from '../../../components/dashboard/mainFooter';

function Table() {
  const data = [
    { status: 'Paid', title: '문제 제목', tier: 'G3', correctRate: '59%' },
    { status: 'Cancelled', title: '문제 제목', tier: 'G5', correctRate: '78%' },
    { status: 'Paid', title: '문제 제목', tier: 'S3', correctRate: '85%' },
    { status: 'Paid', title: '문제 제목', tier: 'S1', correctRate: '37%' },
    { status: 'Cancelled', title: '문제 제목', tier: 'S2', correctRate: '31%' },
    { status: 'Paid', title: '문제 제목', tier: 'G3', correctRate: '59%' },
    { status: 'Cancelled', title: '문제 제목', tier: 'G5', correctRate: '78%' },
    { status: 'Paid', title: '문제 제목', tier: 'S3', correctRate: '85%' },
    { status: 'Paid', title: '문제 제목', tier: 'S1', correctRate: '37%' },
    { status: 'Cancelled', title: '문제 제목', tier: 'S2', correctRate: '31%' },
  ];

  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-center">
                  <thead className="bg-gray-50 ">
                    {/* dark:bg-gray-800 */}
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal w-[20%]"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal w-[40%]"
                      >
                        Title
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal w-[20%]"
                      >
                        Tier
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal w-[20%]"
                      >
                        Correct Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {/*dark:divide-gray-700 dark:bg-gray-900*/}
                    {data.map((item, index) => (
                      <tr key={index}>
                        {item.status === 'Paid' ? (
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <h2 className="text-sm font-normal">
                                {item.status}
                              </h2>
                            </div>
                          </td>
                        ) : (
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 ">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 3L3 9M3 3L9 9"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>

                              <h2 className="text-sm font-normal">Cancelled</h2>
                            </div>
                          </td>
                        )}

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          {item.title}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          {item.tier}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          {item.correctRate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <a
            href="#"
            className="flex items-center px-5 py-2 text-sm capitalize border border-black rounded-md gap-x-2 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>previous</span>
          </a>

          <div className="items-center hidden md:flex gap-x-3">
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md  bg-blue-100/60"
            >
              1
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md hover:bg-gray-100"
            >
              2
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md hover:bg-gray-100"
            >
              3
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md hover:bg-gray-100"
            >
              ...
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md hover:bg-gray-100"
            >
              12
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md hover:bg-gray-100"
            >
              13
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md hover:bg-gray-100"
            >
              14
            </a>
          </div>

          <a
            href="#"
            className="flex items-center px-5 py-2 text-sm capitalize border border-black rounded-md gap-x-2 hover:bg-gray-100"
          >
            <span>Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}

export default function ProblemSet() {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center h-[30vh] bg-gray-300">
          <h1 className="text-[40px]">알고리즘 분류 이름</h1>
          <h1 className="text-[40px]">ex: 그리디</h1>
        </div>
        <div className="m-[20px]">
          <Table />
        </div>
      </div>
      <Footer />
    </>
  );
}
