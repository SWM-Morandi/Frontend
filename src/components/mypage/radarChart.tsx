'use client';

import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

export default function Example() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const algorithm_set = [
    '구현',
    '그래프',
    '그리디',
    '문자열',
    '수학',
    '이분 탐색',
    '자료 구조',
    '정렬',
    '최단 경로',
    'DFS BFS',
    'DP',
  ];
  const persent_set = [86, 53, 72, 29, 39, 74, 67, 86, 53, 72, 39];

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        var myChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: algorithm_set,
            datasets: [
              {
                data: persent_set,
                label: '김상엽',
                borderColor: '#3e95cd',
                backgroundColor: 'rgb(62,149,205,0.1)',
                borderWidth: 2,
              },
            ],
          },
          options: {
            scale: {
              angleLines: {
                display: false,
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
              },
            },
          },
        });
      }
    }
  }, [chartRef]);

  return (
    <>
      {/* Radar chart */}
      <div className="flex flex-row items-center justify-center border border-black rounded-xl shadow-xl w-[1100px]">
        <div className="py-2 sm:px-6 lg:px-8">
          <canvas
            id="radar-chart"
            height="400px"
            width="400px"
            ref={chartRef}
          ></canvas>
        </div>
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-200 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left"
                    >
                      Algorithm
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left"
                    >
                      percent
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left"
                    >
                      Algorithm
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left"
                    >
                      percent
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    {/* 0번 row */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      0
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {algorithm_set[0]}
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {persent_set[0]}%
                    </td>
                    {/* 6번 row */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      6
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {algorithm_set[6]}
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {persent_set[6]}%
                    </td>
                  </tr>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    {/* 1번 row */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      1
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {algorithm_set[1]}
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {persent_set[1]}%
                    </td>
                    {/* 7번 row */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      7
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {algorithm_set[7]}
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {persent_set[7]}%
                    </td>
                  </tr>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    {/* 2번 row */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      2
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {algorithm_set[2]}
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {persent_set[2]}%
                    </td>
                    {/* 8번 row */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      8
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {algorithm_set[8]}
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {persent_set[8]}%
                    </td>
                  </tr>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    {/* 3번 row */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      3
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {algorithm_set[3]}
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {persent_set[3]}%
                    </td>
                    {/* 9번 row */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      9
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {algorithm_set[9]}
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {persent_set[9]}%
                    </td>
                  </tr>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    {/* 4번 row */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      4
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {algorithm_set[4]}
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {persent_set[4]}%
                    </td>
                    {/* 10번 row */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      10
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {algorithm_set[10]}
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {persent_set[10]}%
                    </td>
                  </tr>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    {/* 5번 row */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      5
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {algorithm_set[5]}
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {persent_set[5]}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
