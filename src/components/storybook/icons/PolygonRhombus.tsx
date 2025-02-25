import { ComponentProps } from "react";

const PolygonRhombus = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg {...props} height="180" viewBox="0 0 898 180" width="898">
      <path d="M169.323 179.751L0.49707 0.746094H728.809L897.759 179.751H169.323Z" />
    </svg>
  );
};

export default PolygonRhombus;
