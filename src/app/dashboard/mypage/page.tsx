import Header from '@/components/dashboard/header';
import Footer from '@/components/dashboard/footer';
import UserInfo from '@/components/mypage/userInfo';
import RadarChart from '@/components/mypage/radarChart';
import LineChart from '@/components/mypage/lineChart';
import HeatChart from '@/components/mypage/heatChart';
import TestHistory from '@/components/mypage/testHistory';

export default function MyPage() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center">
        <UserInfo />
        <RadarChart />
        <div className="mt-[3rem]" />
        <LineChart />
        <div className="mt-[3rem]" />
        <HeatChart />
        <div className="mt-[3rem]" />
        <TestHistory />
        <div className="mt-[3rem]" />
      </div>
      <Footer />
    </main>
  );
}
