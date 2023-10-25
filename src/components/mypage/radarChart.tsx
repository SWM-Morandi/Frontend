'use client';

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
import Gap from '@/utils/gap';
import { axiosInstance } from '@/api/axiosSetting';
import { useQuery } from 'react-query';
import { useState } from 'react';
import Image from 'next/image';
import questionIcon from '@/assets/icons/question.svg';
import RadarChartInfo from '@/components/mypage/radarChartInfo';

import Lottie from 'react-lottie-player';

import Loading from '@/assets/lottiefiles/loading.json';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

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

interface RadarChartDataType {
  solvedRates: {
    그래프: number;
    '이분 탐색': number;
    '자료 구조': number;
    그리디: number;
    'DFS와 BFS': number;
    문자열: number;
    DP: number;
    구현: number;
    정렬: number;
    '최단 경로': number;
  };
}

interface RadarChartProps {
  algorithms: string[];
  persents: number[];
}

export default function RadarChart() {
  const [datas, setDatas] = useState<RadarChartProps>({
    algorithms: [],
    persents: [],
  });
  const [infoToggle, setInfoToggle] = useState<boolean>(false);

  const radarChartDataAxios: () => Promise<RadarChartDataType> = async () => {
    const response = await axiosInstance.get<RadarChartDataType>(
      `/tests/graphs`,
      { withCredentials: true },
    );
    return response.data;
  };
  const { isLoading, error, data } = useQuery<RadarChartDataType>(
    'radarChartData',
    radarChartDataAxios,
    {
      onSuccess: (items) => {
        console.log('레이더 차트 디버깅');
        console.log(items);
        const updatedAlgorithms = Object.keys(items.solvedRates);
        const updatedPersents = Object.values(items.solvedRates);
        const updatedDatas = {
          algorithms: updatedAlgorithms,
          persents: updatedPersents,
        };
        setDatas(updatedDatas);
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

  const inputData = {
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

  return (
    <div className="relative flex flex-row items-center justify-center w-[70rem] rounded-xl shadow-md">
      {infoToggle ? <RadarChartInfo /> : null}
      {/* 레이더 차트 */}
      <div className="h-[25rem] w-[25rem]">
        <Radar data={inputData} options={options} />
      </div>
      <Gap wSize="5rem" />

      {/* 레이더 차트 앞쪽 5개 표로 변환  */}
      <div className="flex flex-col items-end">
        <Image
          src={questionIcon}
          alt=""
          className="mr-[1rem] mb-[1rem] cursor-pointer"
          onClick={() => {
            setInfoToggle((prev) => !prev);
          }}
        />
        <div className="flex flex-row rounded-xl bg-gray-100 p-[2rem]">
          <div className="flex flex-col justify-center items-center">
            {datas.algorithms.map(
              (item, idx) =>
                idx < 5 && (
                  <>
                    <div
                      className="flex flex-row justify-between w-[15rem] text-[1.4rem]"
                      key={idx}
                    >
                      <div className="text-gray-500">{item}</div>
                      <div>{datas.persents[idx]}%</div>
                    </div>
                    <Gap hSize="1rem" />
                  </>
                ),
            )}
          </div>
          <Gap wSize="3.5rem" />

          {/* 레이더 차트 뒷쪽 5개 표로 변환  */}
          <div className="flex flex-col justify-center items-center">
            {datas.algorithms.map(
              (item, idx) =>
                idx >= 5 && (
                  <>
                    <div
                      className="flex flex-row justify-between w-[15rem] text-[1.4rem]"
                      key={idx}
                    >
                      <div className="text-gray-500">{item}</div>
                      <div>{datas.persents[idx]}%</div>
                    </div>
                    <Gap hSize="1rem" />
                  </>
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
