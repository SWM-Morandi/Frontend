export default function CopyIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer"
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.5 0H22.16V21.66H0.5V0Z" fill="white" fillOpacity="0.01" />
      <path d="M0.5 0H22.16V21.66H0.5V0Z" fill="white" fillOpacity="0.01" />
      <path
        d="M5.915 5.38206V3.15875C5.915 2.4111 6.52107 1.805 7.26875 1.805H19.0013C19.7489 1.805 20.355 2.4111 20.355 3.15875V14.8912C20.355 15.6389 19.7489 16.245 19.0013 16.245H16.7529"
        stroke="white"
        strokeWidth="1.805"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3912 5.415H3.65875C2.91109 5.415 2.305 6.02109 2.305 6.76875V18.5012C2.305 19.2489 2.91109 19.855 3.65875 19.855H15.3912C16.1389 19.855 16.745 19.2489 16.745 18.5012V6.76875C16.745 6.02109 16.1389 5.415 15.3912 5.415Z"
        stroke="white"
        strokeWidth="1.805"
        strokeLinejoin="round"
      />
    </svg>
  );
}
