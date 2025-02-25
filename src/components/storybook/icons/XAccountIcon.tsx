import { ComponentProps } from "react";

const XAccountIcon = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="22"
      viewBox="0 0 23 22"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4407 0.417969H20.8349L13.4215 8.88908L22.1426 20.418H15.3156L9.96471 13.4276L3.84935 20.418H0.45027L8.37816 11.3555L0.0175781 0.417969H7.01756L11.8493 6.8074L17.4407 0.417969ZM16.2484 18.3891H18.1282L5.99355 2.341H3.97427L16.2484 18.3891Z"
        fill="#2B2438"
      />
    </svg>
  );
};

export default XAccountIcon;
