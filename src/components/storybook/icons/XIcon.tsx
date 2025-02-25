import { ComponentProps } from "react";

const XCircle = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg {...props} height="38" viewBox="0 0 38 38" width="38">
      <g clipPath="url(#clip0_669_9522)">
        <path
          d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38Z"
          fill="#371376"
        />
        <path
          d="M25.8996 8H29.5815L21.5398 17.189L31 29.6949H23.5945L17.7901 22.1121L11.1565 29.6949H7.46936L16.0691 19.8644L7 8H14.5932L19.8344 14.9309L25.8996 8ZM24.6063 27.4941H26.6454L13.4824 10.086H11.292L24.6063 27.4941Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_669_9522">
          <rect fill="white" height="38" width="38" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default XCircle;
