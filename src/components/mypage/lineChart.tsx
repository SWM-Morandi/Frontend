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
import Gap from '@/utils/gap';
import { axiosInstance } from '@/api/axiosSetting';
import { useQuery } from 'react-query';
import { useState } from 'react';
import dayjs from 'dayjs';
import CurrentRating from './currentRating';
import questionIcon from '@/assets/icons/question.svg';
import Image from 'next/image';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface LineChartDataType {
  testDate: Date;
  testRating: number;
  testTypeName: string;
}

export default function LineChart() {
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        plugins: { legend: { display: false } },
      },
      tooltip: {
        titleAlign: 'center',
        callbacks: {
          label: (context: any) => {
            let label = context.dataset.label || '';

            if (label) {
              label = ' 레이팅: ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        position: 'right',
        ticks: { color: '#ADB5BD' },
        display: false,
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
  /*
  const datas = {
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
  };*/

  const [datas, setDatas] = useState<any>({
    labels: [],
    datasets: [
      {
        label: 'line chart',
        fill: true,
        data: [],
        borderColor: 'rgb(255, 213, 83)',
        backgroundColor: 'rgba(255, 213, 83, 0.2)',
      },
    ],
  });

  const lineChartDataAxios: () => Promise<LineChartDataType[]> = async () => {
    const response = await axiosInstance.get<LineChartDataType[]>(
      `/tests/rating-graph`,
      { withCredentials: true },
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery<LineChartDataType[]>(
    'lineChartData',
    lineChartDataAxios,
    {
      onSuccess: (items) => {
        console.log(items);

        const newLabels: string[] = [];
        const newData: number[] = [];
        items.map((item) => {
          console.log(dayjs(item.testDate).format('YYYY/MM/DD'));
          newLabels.push(dayjs(item.testDate).format('YYYY/MM/DD'));
          newData.push(item.testRating);
        });
        setDatas((prevData: any) => ({
          ...prevData,
          labels: [...prevData.labels, ...newLabels],
          datasets: [
            {
              ...prevData.datasets[0],
              data: [...prevData.datasets[0].data, ...newData],
            },
          ],
        }));
      },
      staleTime: 987654321,
    },
  );

  if (isLoading) {
    return (
      <div className="flex flex-row items-center justify-center w-[70rem] h-[25rem] rounded-xl shadow-md">
        <div>로딩중 ...</div>
      </div>
    );
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <div className="flex flex-col justify-center w-[70rem] p-[3rem] rounded-xl shadow-md">
        {/* 사용자 레이팅 값 */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <Gap wSize="1rem" />
            <div className="text-gray-500">현재 레이팅</div>
            <Gap wSize="1rem" />
            <CurrentRating />
          </div>
          <Image className="cursor-pointer" src={questionIcon} alt="" />
        </div>
        <Gap hSize="1rem" />

        {/* 라인차트 */}
        <div className="h-[15rem] w-[65rem]">
          <Line options={options} data={datas} />
        </div>
      </div>
    </>
  );
}

/* 라인차트 배경 그라데이션 넣어보기 */
