import PageLayout from '../../components/main/mainPageLayout';
import Content from '../../components/main/mainContent';
import Card from '../../components/main/mainCard';

export default function Main() {
  return (
    <main>
      <PageLayout>
        <Content>
          <div>최근에 푼 문제</div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Card />
            <Card />
          </div>

          <div>사용자에게 추천하는 코딩테스트</div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div>기업별 코딩테스트</div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div>알고리즘 분류별 공부하기</div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Content>
      </PageLayout>
    </main>
  );
}
