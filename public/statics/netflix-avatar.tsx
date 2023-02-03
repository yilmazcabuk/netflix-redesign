import { SVGAttributes } from 'react';

function NetflixAvatar(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width={150}
      height={150}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        background: '#d15219',
      }}
      {...props}
    >
      <g transform="translate(13)" fill="none" fillRule="evenodd">
        <path
          d="M7 0C3.67 4 2 7.33 2 10c0 4 4 8 8 8s16-5 18-8-4 9-4 14 3 11 11 11c21 0 21.05-35 67-35H7zM143 121c18.23 0 33-14.77 33-33h-66c0 18.23 14.77 33 33 33zM33 120c18.23 0 33-14.77 33-33H0c0 18.23 14.77 33 33 33z"
          fill="#FCFDFF"
        />
        <path
          d="M143 56c18.23 0 33 14.77 33 33h-66c0-18.23 14.77-33 33-33zM33 55c18.23 0 33 14.77 33 33H0c0-18.23 14.77-33 33-33z"
          fill="#FCFDFF"
        />
        <circle fill="#D15219" cx={32} cy={88} r={14} />
        <circle fill="#D15219" cx={142} cy={88} r={14} />
        <path
          d="M67 113c4.67-8.67 10.67-13 18-13s14 4.33 20 13H67zM99 117H72c2.67 6 7 9 13 9s10.67-3 14-9zM82 129c2.67.67 4.67 1 6 1s3.67-1 7-3c4 8 6 14.67 6 20 0 8-6 10-6 10s-6 1-7-6c-1.33 2-3.33 2.67-6 2-3.33-1.33-5-4.33-5-9s1.67-9.67 5-15z"
          fill="#FCFDFF"
        />
      </g>
    </svg>
  );
}

export default NetflixAvatar;
