import { ComponentProps } from "react";

const MicrosoftIcon = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.4737 2H2V11.4737H11.4737V2Z" fill="#F25022" />
      <path d="M11.4737 12.5273H2V22.001H11.4737V12.5273Z" fill="#00A4EF" />
      <path d="M22.0001 2H12.5264V11.4737H22.0001V2Z" fill="#7FBA00" />
      <path
        d="M22.0001 12.5273H12.5264V22.001H22.0001V12.5273Z"
        fill="#FFB900"
      />
    </svg>
  );
};

export default MicrosoftIcon;
