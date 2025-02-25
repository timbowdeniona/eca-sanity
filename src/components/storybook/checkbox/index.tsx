"use client";

import { ComponentProps, useId, useState } from "react";

import { cn } from "@/utils/helpers/cn";
import Check from "../icons/Check";

type Props = {
  label: string;
  name?: string;
  error?: string;
  labelClass?: string;
  checked?: boolean;
  checkBoxClass?: string;
  checkFill?: string;
  onChangeEvent?: (checked: boolean) => void;
} & ComponentProps<"div">;

export const Checkbox = ({
  className,
  label,
  labelClass,
  name,
  error,
  checked: propsChecked,
  defaultValue,
  defaultChecked = false,
  onChange,
  checkBoxClass,
  checkFill,
  ...props
}: Props) => {
  const id = useId();
  // Inner value state if props.checked is not provided
  const [innerChecked, setInnerChecked] = useState(!!defaultChecked);
  const checked = propsChecked !== undefined ? propsChecked : innerChecked;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInnerChecked(prev => !prev);
    onChange?.(event);
  };

  return (
    <div className={cn("flex gap-4 items-center", className)} {...props}>
      <input
        checked={checked}
        className="hidden"
        defaultValue={defaultValue}
        id={id}
        name={name}
        onChange={handleChange}
        type="checkbox"
      />
      <label className="flex cursor-pointer items-center gap-4" htmlFor={id}>
        <div className="relative">
          <div
            className={cn(
              "w-6 h-6 border-2 focus:outline-none",
              checked
                ? "bg-purple border-transparent"
                : "bg-white border-purple-80",
              error && "border-red",
              checkBoxClass,
            )}
          ></div>
          {checked && <Check className="absolute inset-0" fill={checkFill} />}
        </div>
        <span
          className={cn("text-[16px] font-semibold leading-[24px]", labelClass)}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
