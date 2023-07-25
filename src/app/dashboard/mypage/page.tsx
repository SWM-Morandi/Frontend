import Header from '../../../components/dashboard/mainHeader';
import Footer from '../../../components/dashboard/mainFooter';
import UserInfo from '../../../components/mypage/userInfo';
import RadarChart from '../../../components/mypage/radarChart';
import LineChart from '../../../components/mypage/lineChart';
import HeatChart from '../../../components/mypage/heatChart';
import TestHistory from '../../../components/mypage/testHistory';

export default function MyPage() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center">
        <UserInfo />
        <div className="mt-[40px]" />
        <RadarChart />
        <div className="mt-[40px]" />
        <LineChart />
        <div className="mt-[40px]" />
        <HeatChart />
        <div className="mt-[40px]" />
        <TestHistory />
      </div>
      <Footer />
    </main>
  );
}
