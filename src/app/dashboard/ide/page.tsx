import Header from '@/components/ide/header';
import ProblemInfo from '@/components/ide/problemInfo';
import CustomEditor from '@/components/ide/customEditor';

export default function IDE() {
  return (
    <>
      <div className="bg-gray-900 text-white h-[100vh]">
        <Header />
        <div className="flex flex-row px-[2rem]">
          <ProblemInfo />
          <CustomEditor />
        </div>
      </div>
    </>
  );
}
