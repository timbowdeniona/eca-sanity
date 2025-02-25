import { ComponentProps } from "react";

const HeartIcon = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1546 7.12419L19.2233 7.19291C20.6548 8.69701 20.6325 11.0935 19.1562 12.5698L12.1402 19.5858L5.12419 12.5698C3.62527 11.0708 3.62527 8.62311 5.12419 7.12419C6.62311 5.62527 9.07085 5.62527 10.5698 7.12419L11.4323 7.98669L12.1394 8.6938L12.8465 7.98669L13.709 7.12419C15.2079 5.62527 17.6556 5.62527 19.1546 7.12419Z"
        stroke="#C8194B"
        strokeWidth="2"
      />
    </svg>
  );
};

export default HeartIcon;
