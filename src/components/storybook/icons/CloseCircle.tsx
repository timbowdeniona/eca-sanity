import { ComponentProps } from "react";

const CloseCircle = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="48"
      viewBox="0 0 49 48"
      width="49"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24.6641"
        cy="24"
        fill="#371376"
        r="23"
        stroke="white"
        strokeWidth="2"
      />
      <rect
        fill="white"
        height="3"
        transform="rotate(-45 16.3242 29.7178)"
        width="20.5816"
        x="16.3242"
        y="29.7178"
      />
      <rect
        fill="white"
        height="3"
        transform="rotate(-135 30.8789 31.8389)"
        width="20.5816"
        x="30.8789"
        y="31.8389"
      />
    </svg>
  );
};

export default CloseCircle;
