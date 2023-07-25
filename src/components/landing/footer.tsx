import Link from 'next/link';
import FacebookIcon from '@/assets/icons/facebookIcon';
import InstagramIcon from '@/assets/icons/instagramIcon';
import YoutubeIcon from '@/assets/icons/youtubeIcon';

export default function DashboardFooter() {
  return (
    <>
      <footer className="flex flex-row justify-center h-[20vh] px-[5rem] py-[2.5rem] bg-black text-white">
        <div className="flex flex-col justify-center w-[18%]">
          <Link href="/">
            <div className="text-[2rem] font-black">모랜디</div>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start text-[0.9rem] w-[62%]">
          <div className="flex flex-row mb-[2rem]">
            <p className="mr-[1.7rem]">이용안내</p>
            <p className="mr-[1.7rem]">개인정보 처리방침</p>
            <p>취소 및 환불 정책</p>
          </div>
          <div className="text-gray-500 mb-[1rem]">
            <div>
              주소 : 서울특별시 강남구 테헤란로 311(역삼동) 아남타워빌딩
              7층(06151)
            </div>
            <div>기업 또는 이용문의 : edu.tour.2023@gmail.com</div>
          </div>
          <div className="text-gray-500">
            COPYRIGHT 2023 EduTour Co. ALL RIGHTS RESERVED.
          </div>
        </div>
        <div className="flex flex-row justify-end items-end w-[20%]">
          <FacebookIcon />
          <div className="ml-[1rem]" />
          <InstagramIcon />
          <div className="ml-[1rem]" />
          <YoutubeIcon />
        </div>
      </footer>
    </>
  );
}
