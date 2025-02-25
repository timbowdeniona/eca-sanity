import { ComponentProps } from "react";

const LineChartIcon = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      height="90"
      viewBox="0 0 32 28"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 24v2h-32v-24h2v22h30zM30 4.5v6.797c0 0.438-0.531 0.672-0.859 0.344l-1.891-1.891-9.891 9.891c-0.203 0.203-0.516 0.203-0.719 0l-3.641-3.641-6.5 6.5-3-3 9.141-9.141c0.203-0.203 0.516-0.203 0.719 0l3.641 3.641 7.25-7.25-1.891-1.891c-0.328-0.328-0.094-0.859 0.344-0.859h6.797c0.281 0 0.5 0.219 0.5 0.5z"></path>
    </svg>
  );
};

export default LineChartIcon;
