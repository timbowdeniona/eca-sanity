import { SanityVerticalAlignment } from "@/sanity/schema/types";

export const getJustifyContent = (
  vAlign: SanityVerticalAlignment = "top",
): string => {
  const classes = {
    top: "justify-start",
    middle: "justify-center",
    bottom: "justify-end",
    spread: "justify-between",
  };

  return classes[vAlign as keyof typeof classes] || "justify-start";
};

export const getColumnClass = (span: number): string => {
  const classes = {
    3: "@cmd:col-span-3",
    4: "@cmd:col-span-4",
    5: "@cmd:col-span-5",
    6: "@cmd:col-span-6",
    7: "@cmd:col-span-7",
    8: "@cmd:col-span-8",
    9: "@cmd:col-span-9",
  };
  return classes[span as keyof typeof classes] || "@cmd:col-span-6";
};

export const getColumnGap = (gap: number): string => {
  const classes = {
    0: "gap-0",
    4: "gap-4",
    8: "gap-8",
    12: "gap-12",
  };
  return classes[gap as keyof typeof classes];
};

export const getPaddingHorizontal = (padding: number = 0): string => {
  const classes = {
    0: "px-0",
    2: "px-2",
    4: "px-4",
    6: "px-6",
    8: "px-8",
  };
  return classes[padding as keyof typeof classes];
};

export const getPaddingVertical = (padding: number = 0): string => {
  const classes = {
    0: "py-0",
    2: "py-2",
    4: "py-4",
    6: "py-6",
    8: "py-8",
  };
  return classes[padding as keyof typeof classes];
};

export const getBackgroundColour = (bg: string): string => {
  const classes = {
    transparent: "bg-transparent",
    white: "bg-white",
    grey: "bg-grey",
    purple: "bg-purple",
    "purple-80": "bg-purple-80",
    neutral: "bg-neutral",
  };
  return classes[bg as keyof typeof classes];
};
