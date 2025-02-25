import { ComponentProps } from "react";

type Props = {
  maskId: string;
} & ComponentProps<"svg">;

const PolygonRhombusMask = ({ maskId, ...props }: Props) => {
  return (
    <svg
      {...props}
      fill="white"
      height="288"
      viewBox="0 0 1441.8 288"
      width="1403.5"
    >
      <mask id={maskId}>
        <path d="M 268.745 287.86 L 0.999 1.804 L 1164.862 1.804 L 1432.805 287.86 L 268.745 287.86 Z" />
      </mask>
    </svg>
  );
};

export default PolygonRhombusMask;
