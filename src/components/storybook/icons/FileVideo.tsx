import { ComponentProps } from "react";

const FileVideo = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="59"
      viewBox="0 0 45 59"
      width="45"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_426_7492)">
        <rect
          fill="white"
          height="38.0037"
          width="43.5092"
          x="0.565002"
          y="20.6884"
        />
        <path
          clipRule="evenodd"
          d="M26.4836 -0.147095V15.331C26.4836 16.8332 27.7162 18.0624 29.2227 18.0624H44.7444V55.3918C44.7444 56.9054 43.5232 58.1232 42.0053 58.1232H3.65747C2.13953 58.1232 0.918335 56.9054 0.918335 55.3918V2.58433C0.918335 1.07066 2.13953 -0.147095 3.65747 -0.147095H26.4836ZM44.7444 14.4205V13.7262C44.7444 13.0092 44.4591 12.315 43.9455 11.8029L32.7721 0.64957C32.2586 0.137428 31.5624 -0.147095 30.8319 -0.147095H30.1357V14.4205H44.7444ZM15.8282 26.267L32.4156 36.3256C33.0486 36.7094 33.0596 37.6239 32.4362 38.0229L15.8487 48.6403C15.1831 49.0663 14.3096 48.5883 14.3096 47.7981V27.1221C14.3096 26.3427 15.1617 25.8629 15.8282 26.267Z"
          fill="#6BC4E8"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_426_7492">
          <rect
            fill="white"
            height="58.2703"
            transform="translate(0.37146 0.421753)"
            width="43.7027"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FileVideo;
