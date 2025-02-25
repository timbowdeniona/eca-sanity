"use client";

import { ComponentProps, useEffect, useId, useState } from "react";

import { cn } from "@/utils/helpers/cn";
import Search from "../icons/Search";
import CloseIcon from "../icons/Close";

type SearchInputSize = "small" | "medium";

type Props = {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChangeEvent?: (search: string) => void;
  hasClearIcon?: boolean;
  size?: SearchInputSize;
} & ComponentProps<"div">;

export const SearchInput = ({
  onChangeEvent,
  className,
  defaultValue,
  name,
  label,
  value: outerValue,
  placeholder,
  hasClearIcon,
  size = "small",
  ...props
}: Props) => {
  // Generate unique ID for the input element
  const id = useId();
  const [input, setInput] = useState<HTMLInputElement | null>(null);

  // Local state to manage the input value
  const [value, setValue] = useState<string | undefined>(
    defaultValue ?? outerValue ?? "",
  );

  // useEffect to update local state if props.value is updated
  useEffect(() => {
    // Update if outerValue is defined
    if (outerValue != undefined) {
      setValue(outerValue);
    }
  }, [outerValue]);

  useEffect(() => {
    if (input) {
      input.focus();
      input.select();
    }
  }, [input]);

  // Event handler for input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChangeEvent?.(event.target.value);
  };

  // Event handler for clear input
  const handleClearInput = () => {
    setValue("");
    onChangeEvent?.("");
  };

  return (
    <div className={cn("group", className)} {...props}>
      <div className="relative">
        <label className="sr-only" htmlFor={id}>
          {label || placeholder || "Search"}
        </label>
        <input
          className={cn(
            "flex flex-row pl-6 py-[10px] w-full rounded-full border-2 border-purple-80 group-hover:border-purple relative appearance-none outline-none",
            size === "small" && "h-12",
            size === "medium" && "h-[60px]",
            value && "border-purple",
            !value && size === "small" && "pr-[20px]",
            !value && size === "medium" && "pr-[30px]",
            value && size === "small" && "pr-[76px]",
            value && size === "medium" && "pr-[100px]",
          )}
          id={id}
          name={name}
          onChange={handleSearchChange}
          placeholder={placeholder}
          ref={setInput}
          type="search"
          value={value}
        />
        {hasClearIcon && value && (
          <button
            className={cn(
              "flex items-center absolute top-0",
              size === "small" && "h-12 right-[56px]",
              size === "medium" && "h-[60px] right-[76px]",
            )}
            onClick={handleClearInput}
          >
            <CloseIcon
              className={cn(
                "fill-neutral",
                size === "small" && "w-[18px] h-[18px]",
                size === "medium" && "w-6 h-6",
              )}
            />
          </button>
        )}
        <div
          className={cn(
            "flex items-center absolute right-0 top-0 border-2 border-purple-80 group-hover:bg-purple group-hover:border-purple rounded-tr-full rounded-br-full",
            size === "small" && "w-12 h-12 pl-3 pr-[18px] py-[15px]",
            size === "medium" && "w-[60px] h-[60px] p-[18px]",
            value && "border-purple",
          )}
        >
          <Search
            className={cn(
              "fill-purple group-hover:fill-white",
              size === "small" && "w-[18px] h-[18px]",
              size === "medium" && "w-6 h-6",
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
