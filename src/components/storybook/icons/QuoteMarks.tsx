import { ComponentProps } from "react";

const QuoteMarks = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg {...props} height="16" viewBox="0 0 25 16" width="25">
      <path
        d="M13.2535 15.2974C14.3819 10.9754 16.2768 5.87625 18.9381 0H24.3673C22.8982 6.30206 21.8337 11.6354 21.1737 16H13.7325L13.2535 15.2974ZM0 15.2974C0.425815 13.5303 1.18164 11.1457 2.26747 8.14371C3.35329 5.14172 4.47106 2.42715 5.62076 0H11.0499C9.68729 5.45043 8.61211 10.7838 7.82435 16H0.383234L0 15.2974Z"
        fill="white"
      />
    </svg>
  );
};

export default QuoteMarks;
