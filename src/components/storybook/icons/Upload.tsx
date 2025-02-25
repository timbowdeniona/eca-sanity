import { ComponentProps } from "react";

const Upload = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 11.8242V14.8242H2V11.8242H0V14.8242C0 15.9242 0.9 16.8242 2 16.8242H14C15.1 16.8242 16 15.9242 16 14.8242V11.8242H14ZM3 5.82422L4.41 7.23422L7 4.65422V12.8242H9V4.65422L11.59 7.23422L13 5.82422L8 0.824219L3 5.82422Z"
        fill="#C8194B"
      />
    </svg>
  );
};

export default Upload;
