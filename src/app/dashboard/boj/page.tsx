'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/dashboard/header';
import Footer from '@/components/dashboard/footer';
import CodingTestCard from '@/components/dashboard/codingTestCard';
import Link from 'next/link';
import { axiosInstance } from '@/api/axiosSetting';

import Gap from '@/utils/gap';
import Text from '@/utils/text';

import { useRouter } from 'next/navigation';

export default function Boj() {
  const [bojId, setBojId] = useState('');
  const router = useRouter();

  const inputBojId = () => {
    axiosInstance
      .post(
        `/members/register-info`,
        { bojId: bojId },
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log('성공' + res.data);
        router.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="fixed z-10 flex flex-col justify-center items-center w-screen h-screen bg-gray-900">
        <div className="flex flex-col justify-center items-center h-[20rem] w-[25rem] inset-0 bg-white rounded-xl">
          <div className="text-[2rem] font-bold">백준 아이디 입력</div>
          <div className="text-gray-400">백준 아이디를 알려주세요!</div>
          <Gap hSize="2rem" />
          <input
            type="text"
            onChange={(e) => {
              setBojId(e.target.value);
            }}
            className="w-[15rem] h-[2rem] items-center border rounded"
          ></input>
          <Gap hSize="2rem" />
          <button
            onClick={inputBojId}
            className="w-[15rem] h-[2.5rem] items-center bg-[#F04452] text-white rounded"
          >
            입력
          </button>
        </div>
      </div>
    </>
  );
}
