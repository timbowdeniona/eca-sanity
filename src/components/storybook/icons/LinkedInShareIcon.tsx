import { ComponentProps } from "react";

const LinkedInShareIcon = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_669_9525)">
        <mask
          height="40"
          id="mask0_669_9525"
          maskUnits="userSpaceOnUse"
          width="40"
          x="0"
          y="0"
        >
          <path d="M0 0H40V40H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_669_9525)">
          <path
            clipRule="evenodd"
            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM10.3304 29.9998H14.4768V16.6471H10.3304V29.9998ZM10 12.4016C10 13.7275 11.0754 14.8257 12.4013 14.8257C13.7268 14.8257 14.8027 13.7275 14.8027 12.4016C14.8027 11.7647 14.5497 11.1539 14.0993 10.7036C13.649 10.2532 13.0382 10.0002 12.4013 10.0002C11.7645 10.0002 11.1537 10.2532 10.7033 10.7036C10.253 11.1539 10 11.7647 10 12.4016ZM25.858 29.9998H30V22.665C30 19.0757 29.2286 16.3123 25.0321 16.3123C23.0147 16.3123 21.6625 17.4194 21.1089 18.4685H21.0509V16.6471H17.0741V29.9998H21.2161V23.3882C21.2161 21.6471 21.5464 19.9641 23.7022 19.9641C25.8268 19.9641 25.858 21.9507 25.858 23.4998V29.9998Z"
            fill={props.fill}
            fillRule="evenodd"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_669_9525">
          <rect fill="white" height="40" width="40" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedInShareIcon;
