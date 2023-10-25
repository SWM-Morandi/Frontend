const LineChartInfo = () => {
  return (
    <div className="absolute top-[1rem] right-[-17.5rem] w-[16.5rem] p-[1rem] bg-yellow-200 bg-opacity-50 text-gray-800 rounded-lg  ">
      <strong>레이팅</strong>은 모의 테스트 결과 성적을 토대로{' '}
      <strong>사용자의 현 수준</strong>을 나타낸 것입니다. 레이팅을 높여서
      사용자의 <strong>코딩테스트 합격 가능성</strong>을 높여보세요.
      <br />
      <br />
      <strong>Lv.1 Beginner (0 - 999)</strong>
      <br />
      초보 수준의 코딩테스트 실력을 가지고 있습니다.{' '}
      <strong>코딩테스트 합격 가능성</strong>은 <strong>0 ~ 20%</strong> 입니다.
      <br />
      <br />
      <strong>Lv.2 Novice (1001 - 1499)</strong>
      <br />
      입문 수준의 코딩테스트 실력을 가지고 있습니다.{' '}
      <strong>코딩테스트 합격 가능성</strong>은 <strong>20 ~ 50%</strong>{' '}
      입니다.
      <br />
      <br />
      <strong>Lv.3 Medium (1500 - 1799)</strong>
      <br />
      중급 수준의 코딩테스트 실력을 가지고 있습니다.{' '}
      <strong>코딩테스트 합격 가능성</strong>은 <strong>50 ~ 80%</strong>{' '}
      입니다.
      <br />
      <br />
      <strong>Lv.4 Advanced (1800 - 2099)</strong>
      <br />
      코딩테스트 실력이 고급 수준입니다. <strong>코딩테스트 합격 가능성</strong>
      은<br /> <strong>80 ~ 100%</strong>
      입니다.
      <br />
      <br />
      <strong>Lv.5 Expert (2100 이상)</strong>
      <br />
      코딩테스트 수준에 있어 최상위 수준입니다.{' '}
      <strong>코딩테스트 합격 가능성</strong>은 <strong>95 ~ 100%</strong>
      입니다.
    </div>
  );
};

export default LineChartInfo;
