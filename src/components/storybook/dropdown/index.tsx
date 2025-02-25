"use client";

import {
  ComponentProps,
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { isString } from "lodash";
import { cn } from "@/utils/helpers/cn";
import ChevronDown from "../icons/ChevronDown";

export type OptionItem =
  | {
      label: string;
      value?: string | number;
    }
  | string;

type Props = {
  label?: string;
  ariaLabel?: string;
  hint?: string;
  hideLabel?: boolean;
  options: Array<OptionItem>;
  onChangeEvent?: (selected: string) => void;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  labelClass?: string;
  error?: string;
  togglerClass?: string;
  required?: boolean;
} & ComponentProps<"div">;

export const Dropdown = forwardRef<HTMLDivElement, Props>(
  (
    {
      ariaLabel,
      className,
      label,
      hint,
      options,
      onChangeEvent,
      value,
      error,
      hideLabel,
      placeholder,
      disabled,
      labelClass,
      togglerClass,
      required = false,
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleSelect = (optionValue: string) => {
      onChangeEvent?.(optionValue);
      setIsOpen(false);
    };

    const toggleDropdown = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
        if (!isOpen) {
          buttonRef.current?.focus();
        }
      }
    };

    const selectedLabel = options.find(
      o => (isString(o) ? o : o.value?.toString()) == value,
    );

    return (
      <div
        className={cn("flex flex-row gap-4 items-center", className)}
        {...props}
        ref={ref}
      >
        {((!hideLabel && label) || hint) && (
          <div className="flex justify-between">
            {!hideLabel && label && (
              <label
                className={cn(
                  "text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] font-semibold",
                  labelClass,
                )}
                id={`${id}-label`}
              >
                {label}
                {required && <span className="ml-1 text-red">*</span>}
              </label>
            )}
            {hint && <p className="text-sm">{hint}</p>}
          </div>
        )}
        <div className="relative" ref={dropdownRef}>
          <button
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-label={ariaLabel || label}
            className={cn(
              "w-full appearance-none truncate border border-purple-80 bg-white py-[10px] pl-4 pr-14 text-left hover:border-purple",
              "focus-visible:ring-2 focus-visible:ring-opacity-75",
              isOpen && "ring-2 ring-opacity-75",
              disabled &&
                "bg-grey text-gray-500 cursor-not-allowed hover:border-purple-80",
              togglerClass,
            )}
            disabled={disabled}
            id={id}
            onClick={toggleDropdown}
            ref={buttonRef}
            type="button"
          >
            {value
              ? isString(selectedLabel)
                ? selectedLabel
                : selectedLabel?.label
              : placeholder || "Select an option"}
            {!disabled && (
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 fill-purple" />
            )}
          </button>

          {isOpen && (
            <ul
              aria-labelledby={`${id}-label`}
              className="scrollbar-purple-40 absolute z-50 mt-1 max-h-60 w-full overflow-auto border border-purple-80 bg-white"
              role="listbox"
            >
              {options.map((option, index) => {
                const optionValue = isString(option)
                  ? option
                  : option.value?.toString();
                const optionLabel = isString(option) ? option : option.label;
                return (
                  <li
                    aria-selected={value === optionValue}
                    className={cn(
                      "cursor-pointer px-4 py-2 hover:bg-purple-80",
                      value === optionValue && "bg-purple-20 text-white",
                    )}
                    key={`${optionValue}-${index}`}
                    onClick={() => optionValue && handleSelect(optionValue)}
                    role="option"
                  >
                    {optionLabel}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        {error && (
          <small className="mt-0.5 block text-sm text-red">{error}</small>
        )}
      </div>
    );
  },
);

export default Dropdown;
