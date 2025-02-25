import { ComponentProps } from "react";

const Minus = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      height="4"
      viewBox="0 0 16 4"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0.541016H16V3.74102H0V0.541016Z" />
    </svg>
  );
};

export default Minus;
