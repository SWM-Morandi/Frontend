export default function ProblemInfo() {
  return (
    <>
      <div className="flex flex-col w-[40vw] h-[90vh] mr-[1rem] bg-[#2E3642] rounded-2xl overflow-auto">
        <div className="p-[1.5rem]">
          <div className="text-[20px] mb-[1rem]">
            문제 명 패턴에 따른 별 출력
          </div>
          <hr className="text-gray-700"></hr>
          <div className="text-[18px] my-[1rem]">문제</div>
          <div className="bg-gray-900 p-[1rem] rounded-xl">
            <div>
              재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27,
              ...)이라고 할 때, 크기 N의 패턴은 N×N 정사각형 모양이다. 크기 3의
              패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에 별이 하나씩
              있는 패턴이다.
            </div>
            <br />
            <div>***</div>
            <div>* *</div>
            <div>***</div>
            <br />
            <div>
              N이 3보다 클 경우, 크기 N의 패턴은 공백으로 채워진 가운데의
              (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태이다. 예를
              들어 크기 27의 패턴은 예제 출력 1과 같다.
            </div>
          </div>
          <div className="text-[20px] my-[1rem]">입력</div>
          <div className="bg-gray-900 p-[1rem] rounded-xl">
            <div>
              첫째 줄에 N이 주어진다. N은 3의 거듭제곱이다. 즉 어떤 정수 k에
              대해 N=3k이며, 이때 1 ≤ k ≤ 8이다.
            </div>
          </div>
          <div className="text-[20px] my-[1rem]">출력</div>
          <div className="bg-gray-900 p-[1rem] rounded-xl">
            <div>첫째 줄부터 N번째 줄까지 별을 출력한다.</div>
          </div>
          <div className="flex flex-row justify-between my-[1rem]">
            <div className="flex flex-col w-[48%]">
              <div className="mb-[1rem]">예제 입력</div>
              <div className="bg-gray-900 h-[10rem] w-[100%] p-[1rem] rounded-xl">
                3
              </div>
            </div>
            <div className="flex flex-col w-[48%]">
              <div className="mb-[1rem]">예제 출력</div>
              <div className="bg-gray-900 h-[10rem] w-[100%] p-[1rem] rounded-xl">
                ***
                <br />
                * *
                <br />
                ***
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
