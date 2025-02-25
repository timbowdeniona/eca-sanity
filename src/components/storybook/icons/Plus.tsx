import { ComponentProps } from "react";

const Plus = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M6.4 10.4705V16.8701H9.6V10.4705H16V7.27051H9.6V0.870117H6.4V7.27051H0V10.4705H6.4Z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Plus;
