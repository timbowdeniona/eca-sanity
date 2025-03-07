import { ComponentProps } from "react";

const FileLocked = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="47"
      viewBox="30 28 38 47"
      width="38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M33.8605 28.4801H57.0391L67.5748 39.1794V70.7419C67.5748 73.076 65.688 74.9681 63.3605 74.9681H33.8605C31.533 74.9681 29.6462 73.076 29.6462 70.7419V32.7063C29.6462 30.3723 31.533 28.4801 33.8605 28.4801Z"
        fill="#2F71AC"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M57.0391 28.4801V39.1794H67.5748L57.0391 28.4801Z"
        fill="white"
        fillRule="evenodd"
        opacity="0.403995"
      />
      <path
        d="M55.9856 40.1021H66.5213M55.9856 28.4801V40.1021V28.4801Z"
        stroke="white"
        strokeLinecap="square"
      />
      <path
        d="M57.8853 50.8675H56.7137V47.398C56.7137 43.3599 53.3846 40.0736 49.294 40.0736C45.2034 40.0736 41.8742 43.3599 41.8742 47.398V50.8675H40.7027C39.4091 50.8675 38.3596 51.9035 38.3596 53.1805V62.4324C38.3596 63.7093 39.4091 64.7453 40.7027 64.7453H57.8853C59.1788 64.7453 60.2283 63.7093 60.2283 62.4324V53.1805C60.2283 51.9035 59.1788 50.8675 57.8853 50.8675ZM52.8086 50.8675H45.7794V47.398C45.7794 45.485 47.3561 43.9285 49.294 43.9285C51.2319 43.9285 52.8086 45.485 52.8086 47.398V50.8675Z"
        fill="white"
      />
    </svg>
  );
};

export default FileLocked;
