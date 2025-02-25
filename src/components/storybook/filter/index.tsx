"use client";

import { ComponentProps } from "react";

import { cn } from "@/utils/helpers/cn";
import FilterAccordion from "./filter-accordion";

type FilterValue = Record<string, Array<string>>;

type FilterItemOptions = {
  value: string;
  label: string;
};

export type FilterItem = {
  id: string | number;
  key: string;
  name: string;
  isOpen?: boolean;
  options: Array<FilterItemOptions>;
};

type Props = {
  items: Array<FilterItem>;
  defaultValues?: FilterValue;
  values?: FilterValue;
  onChangeEvent?: (values: FilterValue) => void;
} & ComponentProps<"div">;

export const Filter = ({
  className,
  onChangeEvent,
  items,
  values,
  defaultValues,
  ...props
}: Props) => {
  const handleChange = (key: string, updateValues: Array<string>) => {
    onChangeEvent?.({
      ...values,
      [key]: updateValues,
    });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-2">
        {items
          .filter(item => !!item.name)
          .map(item => (
            <FilterAccordion
              defaultValues={defaultValues?.[item.key]}
              filter={item}
              key={item.id}
              onChangeEvent={values => handleChange(item.key, values)}
              values={values && values?.[item.key]}
            />
          ))}
      </div>
    </div>
  );
};

export default Filter;
