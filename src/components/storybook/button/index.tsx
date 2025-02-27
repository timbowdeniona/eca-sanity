import { ComponentProps } from "react";

import Link from "@/components/base/link";
import { cn } from "@/utils/helpers/cn";

type BaseProps = {
  variant: "primary" | "secondary" | "tertiary" | "icon" | "transparent";
};

type BaseColorProps = {
  color?: "red" | "purple" | "white" | "purple-20" | "purple-40" | "purple-80";
};

type CustomColorProps = {
  color?: "custom";
  customColor: string;
  customHoverColor: string;
};

type LinkProps = {
  mode?: "link";
} & ComponentProps<typeof Link>;

type ButtonProps = {
  mode?: "button";
} & ComponentProps<"button">;

type Props = (LinkProps | ButtonProps) &
  (CustomColorProps | BaseColorProps) &
  BaseProps;

const variantColors: Record<string, Record<string, string>> = {
  red: {
    icon: "bg-white text-red fill-red border-red-20 hover:text-red-60 hover:fill-red-60 hover:border-red-60",
    primary:
      "bg-red text-white fill-white border-red hover:bg-red-60 hover:border-red-60",
    secondary:
      "bg-white text-red fill-red border-red hover:text-red-60 hover:fill-red-60 hover:border-red-60",
    tertiary: "text-red fill-red hover:text-red-60 hover:fill-red-60",
  },
  purple: {
    icon: "bg-white text-purple fill-purple border-purple hover:text-purple-40 hover:fill-purple-40 hover:border-purple-40",
    primary:
      "bg-purple text-white fill-white border-purple hover:bg-purple-40 hover:border-purple-40",
    secondary:
      "bg-white text-purple fill-purple border-purple hover:text-purple-40 hover:fill-purple-40 hover:border-purple-40",

    tertiary:
      "text-purple fill-purple hover:text-purple-40 hover:fill-purple-40",
  },
  "purple-80": {
    icon: "bg-white text-purple fill-purple-80 border-purple-80 hover:fill-purple-40 hover:border-purple-40",
    primary:
      "bg-purple-80 text-white fill-white border-purple-80 hover:bg-purple-40 hover:border-purple-40",
    secondary:
      "bg-white text-purple-20 fill-purple-40 border-purple-40 hover:text-purple-20 hover:fill-purple-20 hover:border-purple-20",
    tertiary:
      "text-purple-40 fill-purple-40 hover:text-purple-20 hover:fill-purple-20",
  },
  "purple-40": {
    icon: "bg-white text-purple-40 fill-purple-40 border-purple-40 hover:text-purple-20 hover:fill-purple-20 hover:border-purple-20",
    primary:
      "bg-purple-40 text-white fill-white border-purple-40 hover:bg-purple-20 hover:border-purple-20",
    secondary:
      "bg-white text-purple-40 fill-purple-40 border-purple-40 hover:text-purple-20 hover:fill-purple-20 hover:border-purple-20",
    tertiary:
      "text-purple-40 fill-purple-40 hover:text-purple-20 hover:fill-purple-20",
  },
  "purple-20": {
    icon: "bg-white text-purple-20 fill-purple-20 border-purple-20 hover:text-purple-40 hover:fill-purple-40 hover:border-purple-40",
    primary:
      "bg-purple-20 text-white fill-white border-purple-20 hover:bg-purple-40 hover:border-purple-40",
    secondary:
      "bg-white text-purple-20 fill-purple-20 border-purple-20 hover:text-purple-40 hover:fill-purple-40 hover:border-purple-40",
    tertiary:
      "text-purple-20 fill-purple-20 hover:text-purple-40 hover:fill-purple-40",
  },
  white: {
    icon: "bg-neutral text-white fill-white border-white hover:text-grey hover:fill-grey hover:border-grey",
    primary:
      "bg-white text-neutral fill-neutral border-white hover:bg-grey hover:border-grey",
    secondary:
      "bg-neutral text-white fill-white border-white hover:text-grey hover:fill-grey hover:border-grey",
    tertiary: "text-white fill-white hover:text-grey hover:fill-grey",
  },
  custom: {
    icon: "",
    primary: "",
    secondary: "",
    tertiary: "",
  },
};

export const Button = ({
  className,
  color,
  mode = "button",
  variant = "primary",
  ...props
}: Props) => {
  const { customColor, customHoverColor, ...rest } = props as CustomColorProps;

  let customClasses = "";
  if (color === "custom" && customColor && customHoverColor) {
    if (variant === "icon") {
      customClasses = `bg-white text-${customColor} fill-${customColor} border-${customColor} hover:text-${customHoverColor} hover:fill-${customHoverColor} hover:border-${customHoverColor}`;
    } else if (variant === "primary") {
      customClasses = `bg-${customColor} text-white fill-white border-${customColor} hover:bg-${customHoverColor} hover:border-${customHoverColor}`;
    } else if (variant === "secondary") {
      customClasses = `bg-white text-${customColor} fill-${customColor} border-${customColor} hover:text-${customHoverColor} hover:fill-${customHoverColor} hover:border-${customHoverColor}`;
    } else if (variant === "tertiary") {
      customClasses = `text-${customColor} fill-${customColor} hover:text-${customHoverColor} hover:fill-${customHoverColor}`;
    }
  }

  const baseClassName = cn(
    "flex flex-row items-center rounded-[23px] h-12 text-base font-semibold leading-6 lg:text-[18px] lg:leading-[28px] transition-colors",
    variant === "icon" && "bg-transparent border-[1px] px-6",
    variant === "primary" && "border-[2px] px-6",
    variant === "secondary" && "bg-transparent border-[2px] px-6",
    variant === "tertiary" && "bg-transparent",
    variant === "transparent" &&
      "bg-transparent border-[2px] border-white px-6 text-white fill-white hover:bg-white hover:text-[color:var(--subject-color-primary,var(--aqa-neutral))] hover:fill-[color:var(--subject-color-primary,var(--aqa-neutral))] group/button",
    color === "custom" ? customClasses : variantColors[color ?? "red"][variant],
    className,
  );

  if (mode === "link") {
    return <Link className={baseClassName} {...(rest as LinkProps)} />;
  }
  if (mode === "button") {
    return <button className={baseClassName} {...(rest as ButtonProps)} />;
  }

  throw new Error(`Invalid mode prop: ${mode}`);
};
