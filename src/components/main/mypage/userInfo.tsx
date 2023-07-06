import GithubIcon from '/public/icons/github';
import LinkedinIcon from '/public/icons/email';
import EmailIcon from '/public/icons/linkedin';

export default function UserInfo() {
  return (
    <>
      <div
        className="flex flex-row"
        style={{
          width: '1100px',
          height: '300px',
          borderStyle: 'line',
          borderWidth: '1px',
          borderColor: 'black',
          borderRadius: '20px',
          margin: '10px 10px',
        }}
      >
        <div className="flex flex-col justify-center w-[30%]">
          <img
            className="h-[250px] w-[375px]"
            src="https://velog.velcdn.com/images/jinsunkimdev/post/d6d22712-6da8-4d10-8469-91fcf587e28f/react-logo-second.png"
          />
        </div>
        <div className="flex flex-col justify-center w-[47%]">
          <h1 className="text-3xl">Kim Sang Yeob</h1>
          <div className="flex flex-row">
            <GithubIcon />
            <div className="mr-[10px]"></div>
            <LinkedinIcon />
            <div className="mr-[10px]"></div>
            <EmailIcon />
          </div>
          <div className="h-[50px]"></div>
          <div>
            한줄소개 한줄소개 한줄소개 한줄소개 한줄소개 한줄소개 한줄소개
            한줄소개 한줄소개 한줄소개 한줄소개
          </div>
        </div>
        <div className="flex flex-col justify-between w-[23%]">
          <button className="mt-[50px]">친구목록</button>
          <button className="mb-[50px]">프로필수정</button>
        </div>
      </div>
    </>
  );
}
