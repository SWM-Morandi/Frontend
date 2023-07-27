'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function LineChart() {
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        plugins: { legend: { display: false } },
      },
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        position: 'right',
        ticks: { color: '#ADB5BD' },
      },
      y: {
        grid: { display: false, drawBorder: false },
        ticks: { color: '#ADB5BD' },
        suggestedMin: 0,
        suggestedMax: 100,
        // position: 'right',
      },
    },
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'line chart',
        fill: true,
        data: [30, 40, 75, 61, 80, 75, 88],
        borderColor: 'rgb(255, 213, 83)',
        backgroundColor: 'rgba(255, 213, 83, 0.2)',
      },
    ],
  };

  return (
    <>
      {/* line chart */}
      <div className="flex flex-col justify-center">
        <div className="flex flex-row items-center ml-[0.2rem] mb-[1rem]">
          <div className="text-gray-500 mr-[0.6rem]">현재 레이팅</div>
          <div className="text-[1.3rem] font-bold">1743</div>
        </div>
        <div className="h-[15rem] w-[65rem]">
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
}

/* 라인차트 배경 그라데이션 넣어보기 */
