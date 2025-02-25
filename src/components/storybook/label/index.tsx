import { ComponentProps, CSSProperties } from "react";

import { cn } from "@/utils/helpers/cn";

type VariantProps = {
  variant?: "purple" | "grey" | "green" | "red" | "blue";
};

type CustomColorProps = {
  variant: "custom";
  customColor: CSSProperties["color"];
  customTextColor?: CSSProperties["color"];
};

type Props = (VariantProps | CustomColorProps) & ComponentProps<"span">;

const variantClassNames = {
  purple: "bg-purple text-white",
  grey: "bg-grey text-neutral",
  green: "bg-green text-white",
  red: "bg-red text-white",
  blue: "bg-blue text-white",
};

export const Label = ({ variant = "red", className, ...props }: Props) => {
  const { customColor, customTextColor, ...rest } = props as CustomColorProps;
  const styles = {
    "--label-bg-color": customColor,
    "--label-text-color": customTextColor || "white",
  };

  return (
    <span
      className={cn(
        "text-sm tracking-[0.5px] uppercase font-semibold pt-[2px] pb-[3px] px-2",
        variant !== "custom" && variantClassNames[variant],
        variant === "custom" &&
          " bg-[color:var(--label-bg-color)] text-[color:var(--label-text-color)]",
        className,
      )}
      style={styles as CSSProperties}
      {...(rest as ComponentProps<"span">)}
    />
  );
};
