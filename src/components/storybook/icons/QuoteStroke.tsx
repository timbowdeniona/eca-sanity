import { ComponentProps } from "react";

const QuoteStroke = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      height="322"
      viewBox="0 0 478 322"
      width="478"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0.454102H179.484L477.364 321.454H296.61L0 0.454102Z" />
    </svg>
  );
};

export default QuoteStroke;
