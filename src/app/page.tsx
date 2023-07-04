import LoginBox from '../components/landing/loginBox';
import Header from '../components/landing/header';
import Footer from '../components/landing/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mb-[20vh]"></div>
      <div className="text-center">랜딩페이지</div>
      <div className="mb-[20vh]"></div>
      <Footer />
    </main>
  );
}
