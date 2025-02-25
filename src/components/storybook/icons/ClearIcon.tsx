import { ComponentProps } from "react";

const ClearIcon = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="29"
      viewBox="0 0 28 29"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.1668 8.12232L20.5218 6.46387L14.0002 13.0389L7.4785 6.46387L5.8335 8.12232L12.3552 14.6973L5.8335 21.2724L7.4785 22.9308L14.0002 16.3558L20.5218 22.9308L22.1668 21.2724L15.6452 14.6973L22.1668 8.12232Z"
        fill={props.fill}
      />
    </svg>
  );
};

export default ClearIcon;
