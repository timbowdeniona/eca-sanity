import { ComponentProps } from "react";

const FacebookIcon = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M20 18.8962C20 19.5059 19.5057 20.0001 18.8962 20.0001H1.10383C0.494062 20.0001 0 19.5059 0 18.8962V1.10383C0 0.494141 0.494062 0 1.10383 0H18.8962C19.5057 0 20 0.494141 20 1.10383V18.8962ZM13.7996 12.255V20.0001H10.6826V12.255H8.07623V9.23663H10.6826V7.01061C10.6826 4.42733 12.2603 3.02069 14.5648 3.02069C15.6686 3.02069 16.6173 3.10288 16.8939 3.13968V5.83928L15.2955 5.83999C14.0423 5.83999 13.7996 6.43553 13.7996 7.30944V9.23663H16.7886L16.3994 12.255H13.7996Z"
        fill="#365899"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default FacebookIcon;
