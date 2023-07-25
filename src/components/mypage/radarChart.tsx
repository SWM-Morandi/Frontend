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
        const myChart = new Chart(ctx, {
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
                    {[
                      '#',
                      'Algorithm',
                      'percent',
                      '#',
                      'Algorithm',
                      'percent',
                    ].map((item, idx) => {
                      return (
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 text-left"
                          key={idx}
                        >
                          {item}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <tr
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        key={idx}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {idx}
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          {algorithm_set[idx]}
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          {persent_set[idx]}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {idx + 6}
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          {algorithm_set[idx + 6]}
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          {persent_set[idx + 6]}%
                        </td>
                      </tr>
                    ))}
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
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
