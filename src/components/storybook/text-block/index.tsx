import { ComponentProps, ReactNode } from "react";
import isString from "lodash/isString";
import { cn } from "@/utils/helpers/cn";
import {
  getPaddingHorizontal,
  getPaddingVertical,
} from "@/utils/helpers/getTailwindClasses";

type Props = {
  variant: "primary" | "secondary" | "tertiary";
  headline?: string;
  body?: string | ReactNode;
  paddingVertical?: number;
  paddingHorizontal?: number;
} & ComponentProps<"div">;

export const TextBlock = ({
  className,
  variant,
  headline,
  body,
  paddingHorizontal,
  paddingVertical,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        "@container flex justify-center",
        variant === "primary" && "bg-grey text-neutral",
        variant === "secondary" && "bg-transparent text-neutral",
        variant === "tertiary" && "bg-purple text-white",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex w-full flex-col max-w-[1440px] gap-2 @cmd:gap-4",
          paddingHorizontal === null
            ? "px-6"
            : getPaddingHorizontal(paddingHorizontal as number),
          paddingVertical === null
            ? "py-6"
            : getPaddingVertical(paddingVertical as number),
        )}
      >
        {headline && (
          <h2
            className={
              ["primary", "secondary"].includes(variant) ? "text-purple" : ""
            }
          >
            {headline}
          </h2>
        )}
        {isString(body) ? <p>{body}</p> : body}
      </div>
    </div>
  );
};

export default TextBlock;
