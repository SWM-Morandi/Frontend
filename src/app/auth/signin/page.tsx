import LoginBox from '../../../components/auth/loginBox';
import Header from '../../../components/landing/header';
import Footer from '../../../components/landing/footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className="mb-[10vh]"></div>
      <LoginBox />
      <div className="mb-[10vh]"></div>
      <Footer />
    </>
  );
}
