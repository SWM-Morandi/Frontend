import LoginBox from '../../../components/landing/loginBox';
import Header from '../../../components/landing/header';
import Footer from '../../../components/landing/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mb-[10vh]"></div>
      <LoginBox />
      <div className="mb-[10vh]"></div>
      <Footer />
    </main>
  );
}
