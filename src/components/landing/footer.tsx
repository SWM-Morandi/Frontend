import Link from 'next/link';
import FacebookIcon from '@/assets/icons/facebookIcon';
import InstagramIcon from '@/assets/icons/instagramIcon';
import YoutubeIcon from '@/assets/icons/youtubeIcon';
import Gap from '@/utils/gap';

export default function Footer() {
  return (
    <>
      <footer className="flex flex-row justify-center h-[20vh] px-[5rem] py-[2.5rem] bg-black text-white">
        {/* 푸터 회사 로고 */}
        <div className="flex flex-col justify-center w-[18%]">
          <Link href="/">
            <div className="text-[2rem] font-black">모랜디</div>
          </Link>
        </div>

        {/* 푸터 가운데 정보 */}
        <div className="flex flex-col justify-center items-start text-[0.9rem] w-[62%]">
          <div className="flex flex-row">
            <p>이용안내</p>
            <Gap wSize="1.7rem" />

            <p>개인정보 처리방침</p>
            <Gap wSize="1.7rem" />

            <p>취소 및 환불 정책</p>
          </div>
          <Gap hSize="2rem" />

          <div className="text-gray-500">
            <div>
              주소 : 서울특별시 강남구 테헤란로 311(역삼동) 아남타워빌딩
              7층(06151)
            </div>
            <div>기업 또는 이용문의 : edu.tour.2023@gmail.com</div>
          </div>
          <Gap hSize="1rem" />

          <div className="text-gray-500">
            COPYRIGHT 2023 EduTour Co. ALL RIGHTS RESERVED.
          </div>
        </div>

        {/* 푸터 아이콘 */}
        <div className="flex flex-row justify-end items-end w-[20%]">
          <FacebookIcon />
          <Gap wSize="1rem" />

          <InstagramIcon />
          <Gap wSize="1rem" />

          <YoutubeIcon />
        </div>
      </footer>
    </>
  );
}
