import { ComponentProps } from "react";

const Filter = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M12.6665 0.793945C11.5624 0.793945 10.6205 1.48656 10.2507 2.46059H1.66716C1.16032 2.46059 0.75 2.87089 0.75 3.37725C0.75 3.88687 1.16147 4.29392 1.66716 4.29392H10.2507C10.6204 5.26798 11.5623 5.96064 12.6665 5.96064C13.7706 5.96064 14.7125 5.26793 15.0823 4.29392H16.3325C16.8394 4.29392 17.2497 3.88361 17.2497 3.37725C17.2497 2.86763 16.8382 2.46059 16.3325 2.46059H15.0823C14.7126 1.48654 13.7707 0.793945 12.6665 0.793945ZM11.9165 3.37727C11.9165 2.9631 12.2523 2.62732 12.6665 2.62732C13.0807 2.62732 13.4165 2.96305 13.4165 3.37727C13.4165 3.79153 13.0807 4.12731 12.6665 4.12731C12.2523 4.12731 11.9165 3.7915 11.9165 3.37727ZM5.33348 6.46051C4.22932 6.46051 3.28754 7.15314 2.91771 8.12715H1.66746C1.16062 8.12715 0.750296 8.53746 0.750296 9.04382C0.750296 9.55344 1.16177 9.96048 1.66746 9.96048H2.91769C3.28743 10.9345 4.22923 11.6272 5.33348 11.6272C6.43762 11.6272 7.37949 10.9345 7.74926 9.96048H16.3328C16.8397 9.96048 17.25 9.55018 17.25 9.04382C17.25 8.5342 16.8385 8.12715 16.3328 8.12715H7.74928C7.37958 7.15309 6.43769 6.46051 5.33348 6.46051ZM4.58332 9.04405C4.58332 8.6299 4.91907 8.2941 5.33326 8.2941C5.74749 8.2941 6.08329 8.62992 6.08329 9.04405C6.08329 9.45828 5.74748 9.79409 5.33326 9.79409C4.9191 9.79409 4.58332 9.4583 4.58332 9.04405ZM12.6665 12.1272C11.5624 12.1272 10.6205 12.8199 10.2507 13.794H1.66716C1.16032 13.794 0.75 14.2043 0.75 14.7106C0.75 15.2203 1.16151 15.6272 1.66716 15.6272H10.2507C10.6204 16.6014 11.5623 17.2939 12.6665 17.2939C13.7706 17.2939 14.7125 16.6013 15.0823 15.6272H16.3325C16.8394 15.6272 17.2497 15.2169 17.2497 14.7106C17.2497 14.201 16.8382 13.794 16.3325 13.794H15.0823C14.7126 12.8198 13.7707 12.1272 12.6665 12.1272ZM11.9165 14.7107C11.9165 14.2965 12.2523 13.9607 12.6665 13.9607C13.0807 13.9607 13.4165 14.2965 13.4165 14.7107C13.4165 15.1249 13.0807 15.4607 12.6665 15.4607C12.2523 15.4607 11.9165 15.1249 11.9165 14.7107Z"
        fill={props.fill}
        fillRule="evenodd"
        id="Union"
      />
    </svg>
  );
};

export default Filter;
