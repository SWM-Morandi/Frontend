import Header from '@/components/dashboard/header';
import Footer from '@/components/dashboard/footer';
import UserInfo from '@/components/mypage/userInfo';
import RadarChart from '@/components/mypage/radarChart';
import LineChart from '@/components/mypage/lineChart';
import HeatChart from '@/components/mypage/heatChart';
import TestHistory from '@/components/mypage/testHistory';
import Gap from '@/utils/gap';

export default function MyPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <Gap hSize="3rem" />

        {/* 사용자 정보 컴포넌트 */}
        <UserInfo />
        <Gap hSize="3rem" />

        {/* 사용자 알고리즘 분류별 정답률 컴포넌트 */}
        <RadarChart />
        <Gap hSize="3rem" />

        {/* 사용자 알고리즘 레이팅 컴포넌트 */}
        <LineChart />
        <Gap hSize="3rem" />

        {/* 사용자 히트맵 컴포넌트 */}
        <HeatChart />
        <Gap hSize="3rem" />

        {/* 사용자 코딩테스트 과거 이력 컴포넌트 */}
        <TestHistory />
        <Gap hSize="5rem" />
      </div>
      <Footer />
    </>
  );
}
