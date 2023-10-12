'use client';

function UserIcon() {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 102 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="51" cy="51" r="51" fill="#ADB5BD" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40.6148 39.62C40.6146 40.986 40.8835 42.3387 41.4061 43.6008C41.9288 44.8628 42.6948 46.0096 43.6606 46.9756C44.6265 47.9416 45.7731 48.7079 47.035 49.2308C48.297 49.7537 49.6496 50.0228 51.0156 50.023C53.7743 50.0233 56.4202 48.9276 58.3711 46.9771C60.322 45.0266 61.4182 42.3809 61.4185 39.6222C61.4186 38.2562 61.1497 36.9035 60.6271 35.6415C60.1045 34.3794 59.3384 33.2326 58.3726 32.2666C56.4221 30.3157 53.7764 29.2195 51.0177 29.2192C48.2589 29.219 45.6131 30.3146 43.6621 32.2651C41.7112 34.2157 40.615 36.8613 40.6148 39.62M51.0166 53.2052C65.9958 53.2052 71.8225 62.7379 71.8225 67.1728C71.8225 71.6055 59.4189 72.787 51.0166 72.787C42.6144 72.787 30.2108 71.6055 30.2108 67.1728C30.2108 62.7379 36.0375 53.2052 51.0166 53.2052Z"
        fill="white"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="22.3311"
        y1="1.70711"
        x2="1.70718"
        y2="22.3311"
        stroke="#191F28"
        stroke-width="2"
      />
      <line
        x1="22.2502"
        y1="22.3311"
        x2="1.62622"
        y2="1.70718"
        stroke="#191F28"
        stroke-width="2"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.043 5.454L10.587 14.004C11.057 14.393 11.528 14.587 12 14.587C12.472 14.587 12.943 14.394 13.415 14.006L21.96 5.47C21.987 5.633 22.001 5.81 22.001 5.999V17.999C22.001 19.332 21.334 19.999 20.001 19.999H4C2.667 19.999 2 19.332 2 17.999V6C2 5.803 2.014 5.621 2.043 5.454ZM3.457 4.043C3.624 4.014 3.805 4 4 4H20C20.194 4 20.373 4.014 20.539 4.042L12 12.588L3.457 4.043Z"
        fill="#191F28"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1C5.92545 1 1 6.05312 1 12.2799C1 17.2643 4.15268 21.4875 8.52321 22.9804C8.58452 22.9937 8.64709 23.0003 8.70982 23C9.11741 23 9.27455 22.7004 9.27455 22.4402C9.27455 22.1701 9.26473 21.4629 9.25982 20.5201C8.89596 20.6054 8.52372 20.6499 8.15 20.6527C6.03348 20.6527 5.55223 19.0076 5.55223 19.0076C5.05134 17.7062 4.32946 17.3576 4.32946 17.3576C3.37188 16.6848 4.32455 16.6652 4.39821 16.6652H4.40313C5.50804 16.7634 6.0875 17.8339 6.0875 17.8339C6.6375 18.7964 7.37411 19.0665 8.03214 19.0665C8.46725 19.0578 8.89563 18.9574 9.28929 18.7719C9.3875 18.0451 9.67232 17.5491 9.98661 17.2643C7.54598 16.9795 4.97768 16.0121 4.97768 11.6906C4.97768 10.458 5.40491 9.45134 6.10714 8.66562C5.9942 8.3808 5.61607 7.2317 6.21518 5.67991C6.29554 5.66068 6.37814 5.65242 6.46071 5.65536C6.85848 5.65536 7.75714 5.80759 9.24018 6.83884C11.0422 6.33466 12.948 6.33466 14.75 6.83884C16.233 5.80759 17.1317 5.65536 17.5295 5.65536C17.612 5.65242 17.6946 5.66068 17.775 5.67991C18.3741 7.2317 17.996 8.3808 17.883 8.66562C18.5853 9.45625 19.0125 10.4629 19.0125 11.6906C19.0125 16.0219 16.4393 16.9746 13.9888 17.2545C14.3817 17.6031 14.7353 18.2906 14.7353 19.3415C14.7353 20.8491 14.7205 22.067 14.7205 22.4353C14.7205 22.7004 14.8728 23 15.2804 23C15.3463 23.0003 15.4122 22.9937 15.4768 22.9804C19.8522 21.4875 23 17.2594 23 12.2799C23 6.05312 18.0746 1 12 1Z"
        fill="#191F28"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.8205 1.5H3.29437C2.33672 1.5 1.5 2.18906 1.5 3.13547V20.7005C1.5 21.652 2.33672 22.5 3.29437 22.5H20.8153C21.7781 22.5 22.5 21.6464 22.5 20.7005V3.13547C22.5056 2.18906 21.7781 1.5 20.8205 1.5ZM8.00953 19.0045H5.00109V9.65063H8.00953V19.0045ZM6.60938 8.22844H6.58781C5.625 8.22844 5.00156 7.51172 5.00156 6.61453C5.00156 5.70094 5.64141 5.00109 6.62578 5.00109C7.61016 5.00109 8.2125 5.69578 8.23406 6.61453C8.23359 7.51172 7.61016 8.22844 6.60938 8.22844ZM19.0045 19.0045H15.9961V13.89C15.9961 12.6647 15.5583 11.8275 14.4698 11.8275C13.6383 11.8275 13.1461 12.39 12.9272 12.938C12.8452 13.1348 12.8231 13.403 12.8231 13.6767V19.0045H9.81469V9.65063H12.8231V10.9523C13.2609 10.3289 13.9448 9.43172 15.5363 9.43172C17.5111 9.43172 19.005 10.7334 19.005 13.5398L19.0045 19.0045Z"
        fill="#191F28"
      />
    </svg>
  );
}

function TistoryIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_56_560)">
        <circle cx="12" cy="12" r="2" fill="#191F28" />
        <path
          d="M14.6793 5.1919C14.6793 6.68159 13.4771 7.8838 11.9874 7.8838C10.4977 7.8838 9.29553 6.68159 9.29553 5.1919C9.29553 3.70221 10.4977 2.5 11.9874 2.5C13.4771 2.5 14.6793 3.70221 14.6793 5.1919Z"
          fill="#191F28"
        />
        <path
          d="M7.8838 5.1919C7.8838 6.68159 6.68159 7.8838 5.1919 7.8838C3.70221 7.8838 2.5 6.68159 2.5 5.1919C2.5 3.70221 3.70221 2.5 5.1919 2.5C6.68159 2.5 7.8838 3.70221 7.8838 5.1919Z"
          fill="#191F28"
        />
        <path
          d="M21.5 5.1919C21.5 6.68159 20.2978 7.8838 18.8081 7.8838C17.3184 7.8838 16.1162 6.68159 16.1162 5.1919C16.1162 3.70221 17.3184 2.5 18.8081 2.5C20.2978 2.5 21.5 3.70221 21.5 5.1919Z"
          fill="#191F28"
        />
        <path
          d="M14.6793 11.9873C14.6793 13.477 13.4771 14.6792 11.9874 14.6792C10.4977 14.6792 9.29553 13.477 9.29553 11.9873C9.29553 10.4976 10.4977 9.29541 11.9874 9.29541C13.4771 9.29541 14.6793 10.4976 14.6793 11.9873Z"
          fill="#191F28"
        />
        <path
          d="M14.6793 18.8081C14.6793 20.2978 13.4771 21.5 11.9874 21.5C10.4977 21.5 9.29553 20.2978 9.29553 18.8081C9.29553 17.3184 10.4977 16.1162 11.9874 16.1162C13.4771 16.1162 14.6793 17.3184 14.6793 18.8081Z"
          fill="#191F28"
        />
      </g>
      <defs>
        <clipPath id="clip0_56_560">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

import Gap from '@/utils/gap';
import { useState } from 'react';
import { axiosInstance } from '@/api/axiosSetting';

interface AttemptProblemDtoType {
  testProblemId: number;
  bojProblemId: number;
  isSolved: boolean;
  executionTime: number | null;
}

interface TestHistoryInfoType {
  testId: number;
  testDate: string;
  testTime: number;
  problemCount: number;
  acceptCount: number;
  startDifficulty: string;
  endDifficulty: string;
  testTypename: string;
  testRating: number;
  originRating: number;
  attemptProblemDto: AttemptProblemDtoType[];
}

interface UserInfoUpdateModalProps {
  setTestHistoryDetailModalFlag: (flag: boolean) => void;
  testHistoryInfo: TestHistoryInfoType | undefined;
}

export default function TestHistoryDetailModal({
  setTestHistoryDetailModalFlag,
  testHistoryInfo,
}: UserInfoUpdateModalProps) {
  return (
    <div className="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="fixed w-[100vw] h-[100vh] bg-black opacity-50"></div>
      <div className="z-20 flex flex-col justify-center items-center py-[3rem] w-[28rem] inset-0 bg-white rounded-xl">
        <div className="flex flex-row items-center justify-between w-[85%]">
          <div className="text-[1.8rem] font-semibold">
            {testHistoryInfo?.testTypename}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setTestHistoryDetailModalFlag(false);
            }}
          >
            <XIcon />
          </div>
        </div>
        <Gap hSize="1rem" />
        <div className="flex flex-col w-[85%]">
          <div className="text-[1.2rem] font-bold">시험 난이도</div>
          <div>
            {testHistoryInfo?.startDifficulty} ~{' '}
            {testHistoryInfo?.endDifficulty}
          </div>
          <div></div>
        </div>
        <Gap hSize="1rem" />
        <div className="flex flex-col w-[85%]">
          <div className="text-[1.2rem] font-bold">시험 문제 수</div>
          <div>{testHistoryInfo?.problemCount} 개</div>
          <div></div>
        </div>
        <Gap hSize="1rem" />
        <div className="flex flex-col w-[85%]">
          <div className="text-[1.2rem] font-bold">맞춘 문제 수</div>
          <div>{testHistoryInfo?.acceptCount} 개</div>
          <div></div>
        </div>
        <Gap hSize="1rem" />
        <div className="flex flex-col w-[85%]">
          <div className="text-[1.2rem] font-bold">시험 응시 날짜</div>
          <div>{testHistoryInfo?.testDate}</div>
          <div></div>
        </div>
        <Gap hSize="1rem" />
        <div className="flex flex-col w-[85%]">
          <div className="text-[1.2rem] font-bold">시험 시간</div>
          <div>{testHistoryInfo?.testTime} 분</div>
          <div></div>
        </div>
        <Gap hSize="1rem" />
        <div className="flex flex-col w-[85%]">
          <div className="text-[1.2rem] font-bold">레이팅 포인트</div>
          <div>{testHistoryInfo?.testRating}점</div>
          <div></div>
        </div>
        <Gap hSize="1rem" />
        <div className="flex flex-col w-[85%]">
          <div className="text-[1.2rem] font-bold">시험 결과</div>
          {testHistoryInfo?.attemptProblemDto.map((item) => {
            return (
              <div className="flex flex-row w-[100%]">
                <div>{item.testProblemId}번 : </div>
                <Gap wSize="0.3rem" />
                {item.isSolved ? (
                  <div style={{ color: 'green' }}>해결</div>
                ) : (
                  <div style={{ color: 'red' }}>미해결</div>
                )}
                <Gap wSize="1rem" />
                <a
                  href={`https://acmicpc.net/problem/${item.bojProblemId}`}
                  target="_blank"
                >
                  다시 풀기
                </a>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    </div>
  );
}
