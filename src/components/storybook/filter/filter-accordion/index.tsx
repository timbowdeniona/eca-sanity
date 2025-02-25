"use client";

import { ComponentProps, useState } from "react";

import { cn } from "@/utils/helpers/cn";
import { FilterItem } from "..";
import Plus from "../../icons/Plus";
import Minus from "../../icons/Minus";
import Checkbox from "../../checkbox";

type Props = {
  filter: FilterItem;
  defaultValues?: Array<string>;
  values?: Array<string>;
  onChangeEvent?: (values: Array<string>) => void;
} & ComponentProps<"div">;

export const FilterAccordion = ({
  onChangeEvent,
  className,
  filter,
  defaultValues,
  values = [],
  ...props
}: Props) => {
  const [open, setOpen] = useState(!!filter.isOpen);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      onChangeEvent?.([...values, value]);
    } else {
      onChangeEvent?.(values.filter(item => item !== value));
    }
  };

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <div
        aria-controls={`filter-options-${filter.key}`}
        aria-expanded={open}
        className={cn(
          "h-[60px] flex items-center pl-6 pr-12 py-[10px] relative w-full cursor-pointer transition select-none",
          open
            ? "bg-purple-20 text-white fill-white"
            : "bg-white text-purple fill-purple",
        )}
        onClick={() => setOpen(prev => !prev)}
        role="button"
      >
        <p>
          <b>{filter.name}</b>
        </p>
        {open ? (
          <Minus className="absolute right-4 h-[3.2px] w-4" />
        ) : (
          <Plus className="absolute right-4 size-4" />
        )}
      </div>
      {open && (
        <div
          aria-label={`${filter.name} listbox`}
          className={cn(
            "scrollbar-purple-40 flex max-h-[577px] flex-col gap-4",
            "overflow-y-auto overflow-x-hidden bg-grey px-5 py-6",
          )}
          id={`filter-options-${filter.key}`}
          role="listbox"
        >
          {filter.options.map((item, index) => (
            <Checkbox
              checked={values?.includes(item.value)}
              defaultChecked={defaultValues?.includes(item.value)}
              defaultValue={item.value}
              key={index}
              label={item.label}
              name={filter.key}
              onChange={handleChange}
              role="option"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterAccordion;
