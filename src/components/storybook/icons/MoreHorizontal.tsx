import { ComponentProps } from "react";

const MoreHorizontal = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      height="7"
      viewBox="0 0 27 7"
      width="27"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="23.2188" cy="3.5" fill="white" r="3" />
      <circle cx="13.2188" cy="3.5" fill="white" r="3" />
      <circle cx="3.21875" cy="3.5" fill="white" r="3" />
    </svg>
  );
};

export default MoreHorizontal;
