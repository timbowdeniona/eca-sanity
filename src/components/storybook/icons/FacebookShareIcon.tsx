import { ComponentProps } from "react";

const FacebookShareIcon = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM22.1354 15.9011L21.4873 19.934H18.3186V30.0881C17.5265 30.2322 16.7343 30.3042 15.9421 30.3042C15.15 30.3042 14.3578 30.2322 13.5656 30.0881V19.934H9.96484V15.9011H13.5656V12.7324C13.5656 9.13166 15.8701 7.11523 19.1828 7.11523C20.191 7.11523 21.3433 7.25926 22.3515 7.4033V11.0761H20.4791C18.7507 11.0761 18.3186 11.9403 18.3186 13.0925V15.9011H22.1354Z"
        fill={props.fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default FacebookShareIcon;
