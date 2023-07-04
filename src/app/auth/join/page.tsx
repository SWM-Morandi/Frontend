import JoinBox from '../../../components/landing/joinBox';
import Header from '../../../components/landing/header';
import Footer from '../../../components/landing/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mb-[10vh]"></div>
      <JoinBox />
      <div className="mb-[10vh]"></div>
      <Footer />
    </main>
  );
}
