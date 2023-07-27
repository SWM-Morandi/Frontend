import Header from '@/components/ide/header';
import ProblemInfo from '@/components/ide/problemInfo';
import CustomEditor from '@/components/ide/customEditor';

export default function IDE() {
  return (
    <>
      <div className="bg-gray-900 text-white h-[100vh]">
        <Header />
        <div className="flex flex-row mx-[2rem]">
          <div className="flex flex-col w-[40vw] h-[90vh] mr-[1rem] bg-[#2E3642] rounded-2xl overflow-auto">
            <div className="p-[1.5rem]">
              <ProblemInfo />
            </div>
          </div>
          <div className="flex flex-col w-[60vw]">
            <CustomEditor />
          </div>
        </div>
      </div>
    </>
  );
}
