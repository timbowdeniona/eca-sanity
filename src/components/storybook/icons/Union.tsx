import { ComponentProps } from "react";

const Union = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="12"
      viewBox="0 0 16 12"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M0 0.117188H16V1.68336H0V0.117188ZM0 5.21642H16V6.78259H0V5.21642ZM16 10.3157H0V11.8818H16V10.3157Z"
        fill="#371376"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Union;
