import { ComponentProps } from "react";

const FileZip = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="59"
      viewBox="0 0 44 59"
      width="44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_426_7480)">
        <rect
          fill="white"
          height="38.0037"
          width="43.5092"
          x="0.479004"
          y="20.6884"
        />
        <path
          d="M43.8596 11.8029L32.6862 0.64957C32.1726 0.137428 31.4764 -0.147095 30.746 -0.147095H30.0498V14.4205H44.6585V13.7262C44.6585 13.0092 44.3732 12.315 43.8596 11.8029ZM15.4867 38.0928C13.4438 38.0928 11.7889 39.4699 11.7889 41.1656C11.7889 42.8728 13.4552 44.2385 15.4982 44.2385C17.5411 44.2385 19.196 42.8614 19.196 41.1656C19.196 39.4699 17.5297 38.0928 15.4867 38.0928ZM26.3976 15.331V-0.147095H19.1389V3.4948H15.4867V-0.147095H3.57153C2.05359 -0.147095 0.832397 1.07066 0.832397 2.58433V55.3918C0.832397 56.9054 2.05359 58.1232 3.57153 58.1232H41.9194C43.4373 58.1232 44.6585 56.9054 44.6585 55.3918V18.0624H29.1367C27.6302 18.0624 26.3976 16.8332 26.3976 15.331ZM11.7775 3.4948H15.4297V7.13669H11.7775V3.4948ZM15.4639 47.1975C11.6748 47.1975 8.84435 43.7377 9.59762 40.0389L11.8346 28.9881V25.3462H15.4867V21.7043H11.8346V18.0624H15.4867V14.4205H11.8346V10.7786H15.4867V7.13669H19.1389V10.7786H15.4867V14.4205H19.1389V18.0624H15.4867V21.7043H19.1389V25.3462H15.4867V28.9881H18.009C18.6596 28.9881 19.2302 29.4547 19.3558 30.092L21.3302 40.0731C22.0607 43.7605 19.2302 47.1975 15.4639 47.1975Z"
          fill="#2B2438"
        />
      </g>
      <defs>
        <clipPath id="clip0_426_7480">
          <rect
            fill="white"
            height="58.2703"
            transform="translate(0.285522 0.421753)"
            width="43.7027"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FileZip;
