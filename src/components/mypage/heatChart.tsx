'use client';

import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

export default function HeatChart() {
  return (
    <div className="flex flex-row justify-center w-[1100px] border border-gray-400 rounded-xl shadow-xl">
      <div className="w-[1000px] py-8">
        <CalendarHeatmap
          startDate={new Date('2015-04-02')}
          endDate={new Date('2016-04-01')}
          values={[
            { date: '2016-01-01', count: 12 },
            { date: '2016-01-22', count: 122 },
            { date: '2016-01-30', count: 38 },
            // ...and so on
          ]}
        />
      </div>
    </div>
  );
}

// https://codesandbox.io/s/reverent-ishizaka-go9k6?file=/src/HeatMap.tsx:0-1686
// https://www.npmjs.com/package/@types/react-calendar-heatmap
