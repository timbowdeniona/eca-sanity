import { ComponentProps } from "react";

const LineGradient = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      height="104"
      viewBox="0 0 104 104"
      width="104"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0.146484L104 103.854V0.146484H0Z" fill="#F4F4F4" />
    </svg>
  );
};

export default LineGradient;
