'use client';

import { data } from 'autoprefixer';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export default function RadarChart() {
  const datas = {
    algorithms: [
      '구현',
      '그래프',
      '그리디',
      '문자열',
      '이분 탐색',
      '자료 구조',
      '정렬',
      '최단 경로',
      'DFS BFS',
      'DP',
    ],
    persents: [86, 53, 72, 29, 39, 74, 86, 53, 72, 55],
  };

  const data = {
    labels: datas.algorithms,
    datasets: [
      {
        label: '확률',
        data: datas.persents,
        borderColor: '#FAC933',
        borderWidth: 1,
        backgroundColor: 'rgba(253, 225, 140, 0.5)',
        pointBackgroundColor: 'rgba(250, 201, 51)',
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <>
      {/* Radar chart */}
      <div className="flex flex-row items-center justify-center">
        <div className="h-[25rem] w-[25rem] mr-[5rem]">
          <Radar data={data} options={options} />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col justify-center items-center mr-[3.5rem]">
            {datas.algorithms.map(
              (item, idx) =>
                idx < 5 && (
                  <div
                    className="flex flex-row justify-between w-[15rem] my-[0.5rem] text-[1.4rem]"
                    key={idx}
                  >
                    <div className="text-gray-500">{item}</div>
                    <div>{datas.persents[idx]}%</div>
                  </div>
                ),
            )}
          </div>
          <div className="flex flex-col justify-center items-center">
            {datas.algorithms.map(
              (item, idx) =>
                idx >= 5 && (
                  <div
                    className="flex flex-row justify-between w-[15rem] my-[0.5rem] text-[1.4rem]"
                    key={idx}
                  >
                    <div className="text-gray-500">{item}</div>
                    <div>{datas.persents[idx]}%</div>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
