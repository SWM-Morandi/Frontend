import PageLayout from '../../../components/main/mainPageLayout';
import UserInfo from '../../../components/main/mypage/userInfo';
import RadarChart from '../../../components/main/mypage/radarChart';
import LineChart from '../../../components/main/mypage/lineChart';
import HitChart from '../../../components/main/mypage/hitChart';
import TestHistory from '../../../components/main/mypage/testHistory';

export default function MyPage() {
  return (
    <main>
      <PageLayout>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <UserInfo />
          <RadarChart />
          <LineChart />
          <HitChart />
          <TestHistory />
        </div>
      </PageLayout>
    </main>
  );
}
