import { ComponentProps } from "react";

const MenuCircle = ({ ...props }: ComponentProps<"svg">) => {
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
      <rect fill="white" height="3" width="20.5816" x="14.375" y="15.9414" />
      <rect fill="white" height="3" width="20.5816" x="14.375" y="22.5" />
      <rect fill="white" height="3" width="20.5816" x="14.375" y="29.0586" />
    </svg>
  );
};

export default MenuCircle;
