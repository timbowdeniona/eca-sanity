import { ComponentProps } from "react";

const Triangle = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="181"
      viewBox="0 0 175 181"
      width="175"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.000961304 0.3125L174.375 180.878V0.3125H0.000961304Z" />
    </svg>
  );
};

export default Triangle;
