import Header from '../../../components/main/mainHeader';
import Footer from '../../../components/main/mainFooter';
import UserInfo from '../../../components/mypage/userInfo';
import RadarChart from '../../../components/mypage/radarChart';
import LineChart from '../../../components/mypage/lineChart';
import HeatChart from '../../../components/mypage/heatChart';
import TestHistory from '../../../components/mypage/testHistory';

export default function MyPage() {
  return (
    <main>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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
