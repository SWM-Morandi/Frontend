'use client';

import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import './heatChart.css';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { axiosInstance } from '@/api/axiosSetting';
import dayjs from 'dayjs';

function shiftDate(date: Date, numDays: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomValues(count: number, date = new Date()) {
  return Array(count)
    .fill(0)
    .map((_, index) => {
      return {
        date: shiftDate(date, -index),
        count: getRandomInt(0, 10),
      };
    });
}

interface HeatChartDataType {
  solvedCount: number;
  testDate: number[];
}

interface HeatChartProps {
  date: Date;
  count: number;
}

export default function HeatChart() {
  const dayCount = 250;
  const endData = new Date();
  const startData = shiftDate(endData, -1 * dayCount);

  const monthLabels = [
    '',
    '',
    '3월',
    '',
    '',
    '6월',
    '',
    '',
    '9월',
    '',
    '',
    '12월',
  ];

  const values = generateRandomValues(dayCount);

  const [datas, setDatas] = useState<HeatChartProps[]>(
    Array(250)
      .fill(0)
      .map((_, index) => {
        return {
          date: shiftDate(new Date(), -index),
          count: 0,
        };
      }),
  );

  const heatChartDataAxios: () => Promise<HeatChartDataType[]> = async () => {
    const response = await axiosInstance.get<HeatChartDataType[]>(
      `/tests/heatmaps`,
      { withCredentials: true },
    );
    return response.data;
  };

  // "solvedCount": 0,
  //   "testDate": "2023-10-05"
  const { isLoading, error, data } = useQuery<HeatChartDataType[]>(
    'heatChartData',
    heatChartDataAxios,
    {
      onSuccess: (items) => {
        const today = dayjs();
        const updatedDatas = [...datas];

        items.map((item) => {
          const itemDate = dayjs(
            item.testDate[0] + '-' + item.testDate[1] + '-' + item.testDate[2],
          );
          const diffDate = today.diff(itemDate, 'day');
          console.log(diffDate);

          if (diffDate >= 0 && diffDate < updatedDatas.length) {
            updatedDatas[diffDate] = {
              date: updatedDatas[diffDate].date,
              count: item.solvedCount,
            };
          }

          setDatas(updatedDatas);
        });
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

  function getTooltipDataAttrs(value: { date: Date; count: number }) {
    if (!value || !value.date) {
      return null;
    }
    return {
      'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${
        value.count
      }`,
    };
  }

  const getClassForValue = (value: { count: number; date: Date }) => {
    if (value.count === 0) {
      return 'color-empty';
    } else if (value.count <= 5) {
      return `color-scale-1`;
    } else if (value.count <= 8) {
      return `color-scale-2`;
    } else if (value.count <= 9) {
      return `color-scale-3`;
    } else {
      return `color-scale-4`;
    }
  };

  return (
    <div className="flex flex-row justify-center w-[70rem] p-[3rem] rounded-xl shadow-md">
      <CalendarHeatmap
        values={datas}
        startDate={startData}
        endDate={endData}
        gutterSize={1.5}
        monthLabels={monthLabels}
        classForValue={getClassForValue}
        tooltipDataAttrs={getTooltipDataAttrs}
      />
      <ReactTooltip />
    </div>
  );
}

// https://codesandbox.io/s/reverent-ishizaka-go9k6?file=/src/HeatMap.tsx:0-1686
// https://www.npmjs.com/package/@types/react-calendar-heatmap
