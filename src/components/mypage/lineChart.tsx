'use client';

import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

export default function Example() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            datasets: [
              {
                data: [86, 114, 106, 106, 107, 111, 133],
                label: '김상엽',
                borderColor: '#3e95cd',
                backgroundColor: '#7bb6dd',
                fill: false,
              },
            ],
          },
        });
      }
    }
  }, [chartRef]);

  return (
    <>
      {/* line chart */}
      <div className="flex flex-row justify-center w-[1100px] border border-gray-400 pt-0 rounded-xl shadow-xl">
        <div className="py-4">
          <canvas
            id="line-chart"
            width="1000"
            height="300"
            ref={chartRef}
          ></canvas>
        </div>
      </div>
    </>
  );
}
