'use client';

import Axios from 'axios';
import { useState, useEffect } from 'react';

interface ProblemInfoType {
  problem_title: string;
  problem_description: string;
  problem_input: string;
  problem_output: string;
  input_sample: Array<string>;
  output_sample: Array<string>;
}

export default function ProblemInfo({
  problemId,
  problemInfo,
}: {
  problemId: any;
  problemInfo: ProblemInfoType;
}) {
  return (
    <>
      <div className="flex flex-col w-[40vw] h-[90vh] mr-[1rem] bg-[#2E3642] rounded-2xl overflow-auto">
        <div className="p-[1.5rem]">
          <div className="text-[20px] mb-[1rem]">
            {problemId}번. {problemInfo.problem_title}
          </div>
          <hr className="text-gray-700"></hr>
          <div className="text-[18px] my-[1rem]">문제</div>
          <div className="bg-gray-900 p-[1rem] rounded-xl">
            <span
              dangerouslySetInnerHTML={{
                __html: problemInfo.problem_description,
              }}
            ></span>
          </div>
          <div className="text-[20px] my-[1rem]">입력</div>
          <div className="bg-gray-900 p-[1rem] rounded-xl">
            <span
              dangerouslySetInnerHTML={{
                __html: problemInfo.problem_input,
              }}
            ></span>
          </div>
          <div className="text-[20px] my-[1rem]">출력</div>
          <div className="bg-gray-900 p-[1rem] rounded-xl">
            <span
              dangerouslySetInnerHTML={{
                __html: problemInfo.problem_output,
              }}
            ></span>
          </div>
          <div className="flex flex-row justify-between my-[1rem]">
            <div className="flex flex-col w-[48%]">
              <div className="mb-[1rem]">예제 입력</div>
              <div className="bg-gray-900 h-[10rem] w-[100%] p-[1rem] rounded-xl">
                <span
                  dangerouslySetInnerHTML={{
                    __html: problemInfo.input_sample,
                  }}
                ></span>
              </div>
            </div>
            <div className="flex flex-col w-[48%]">
              <div className="mb-[1rem]">예제 출력</div>
              <div className="bg-gray-900 h-[10rem] w-[100%] p-[1rem] rounded-xl">
                <span
                  dangerouslySetInnerHTML={{
                    __html: problemInfo.output_sample,
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
