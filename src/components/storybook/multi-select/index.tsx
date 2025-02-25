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
import Checkbox from "../checkbox";

type OptionItem =
  | {
      label: string;
      value: string;
    }
  | string;

type Props = {
  disabled?: boolean;
  label?: string;
  hideLabel?: boolean;
  options: Array<OptionItem>;
  onChangeEvent?: (selected: string[]) => void;
  value?: string[];
  placeholder?: string;
} & ComponentProps<"div">;

export const MultiSelect = forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      disabled,
      label,
      options,
      onChangeEvent,
      value = [],
      hideLabel,
      placeholder,
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValues, setSelectedValues] = useState<string[]>(value);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      setSelectedValues(value);
    }, [value]);

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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const checked = event.target.checked;

      let updatedValues;
      if (checked) {
        updatedValues = [...selectedValues, value];
      } else {
        updatedValues = selectedValues.filter(item => item !== value);
      }

      setSelectedValues(updatedValues);
      onChangeEvent?.(updatedValues);
    };

    const selectedLabels = selectedValues
      .map(v => options.find(o => (isString(o) ? o : o?.value) === v)!)
      .map(o => (isString(o) ? o : o?.label))
      .join(", ");

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
      if (!isOpen) {
        buttonRef.current?.focus();
      }
    };

    return (
      <div
        className={cn("flex flex-col gap-4", className)}
        {...props}
        ref={ref}
      >
        {label && (
          <label
            className={cn(
              "text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] font-semibold",
              hideLabel && "sr-only",
            )}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <div className="relative w-full" ref={dropdownRef}>
          <button
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            className={cn(
              "w-full appearance-none truncate border border-purple-80 bg-white py-[10px] pl-4 pr-14 text-left hover:border-purple",
              "focus-visible:ring-2 focus-visible:ring-opacity-75",
              isOpen && "ring-2 ring-opacity-75",
            )}
            disabled={disabled}
            id={id}
            onClick={toggleDropdown}
            ref={buttonRef}
            type="button"
          >
            {selectedValues.length > 0
              ? selectedLabels
              : placeholder || "Select options"}
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 fill-purple" />
          </button>

          {isOpen && (
            <div
              aria-labelledby={id}
              className="scrollbar-purple-40 absolute z-10 mt-1 max-h-60 w-full overflow-auto border border-purple-80 bg-white"
              role="listbox"
            >
              {options.map((option, index) => {
                const optionValue = isString(option) ? option : option.value;
                const optionLabel = isString(option) ? option : option.label;
                return (
                  <div className="w-full cursor-pointer px-4 py-2" key={index}>
                    <Checkbox
                      aria-selected={selectedValues.includes(optionValue)}
                      checked={selectedValues.includes(optionValue)}
                      className="w-full"
                      defaultValue={optionValue}
                      label={optionLabel}
                      name={id}
                      onChange={handleChange}
                      role="option"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  },
);

export default MultiSelect;
