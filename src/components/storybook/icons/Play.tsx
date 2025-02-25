import { ComponentProps } from "react";

const Close = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="48" width="48" />
      <path
        d="M33.5 23.134C34.1667 23.5189 34.1667 24.4811 33.5 24.866L18.5 33.5263C17.8333 33.9112 17 33.4301 17 32.6603V15.3397C17 14.5699 17.8333 14.0888 18.5 14.4737L33.5 23.134Z"
        fill="white"
      />
    </svg>
  );
};

export default Close;
