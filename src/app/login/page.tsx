import LandingPageLayout from '../../components/landingPageLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <LandingPageLayout>
        로그인 페이지
        <br></br>
        <Link href="/main">로그인 버튼</Link>
      </LandingPageLayout>
    </main>
  );
}
