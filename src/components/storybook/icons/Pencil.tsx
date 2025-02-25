import { ComponentProps } from "react";

const Pencil = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="17"
      viewBox="0 0 18 17"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 12.9401V16.2734H3.75L14.81 6.44233L11.06 3.10899L0 12.9401ZM2.92 14.4957H2V13.6779L11.06 5.62455L11.98 6.44233L2.92 14.4957ZM17.71 2.61122L15.37 0.531215C15.17 0.353437 14.92 0.273438 14.66 0.273438C14.4 0.273438 14.15 0.362326 13.96 0.531215L12.13 2.15788L15.88 5.49122L17.71 3.86455C18.1 3.51788 18.1 2.95788 17.71 2.61122Z"
        fill="#C8194B"
      />
    </svg>
  );
};

export default Pencil;
