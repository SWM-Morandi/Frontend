import Header from '../../../components/main/mainHeader';
import Footer from '../../../components/main/mainFooter';
import UserInfo from '../../../components/main/mypage/userInfo';
import RadarChart from '../../../components/main/mypage/radarChart';
import LineChart from '../../../components/main/mypage/lineChart';
import HeatChart from '../../../components/main/mypage/heatChart';
import TestHistory from '../../../components/main/mypage/testHistory';

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
