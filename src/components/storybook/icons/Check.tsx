import { ComponentProps } from "react";

const Check = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5683 17.5L5.29004 12.2217L6.77852 10.7332L10.5683 14.5125L18.5808 6.5L20.0693 7.99904L10.5683 17.5Z"
        fill={props.fill ?? "white"}
      />
      <path
        d="M10.5683 17.5L5.29004 12.2217L6.77852 10.7332L10.5683 14.5125L18.5808 6.5L20.0693 7.99904L10.5683 17.5Z"
        fill={props.fill ?? "white"}
      />
    </svg>
  );
};

export default Check;
