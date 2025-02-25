import type { FC } from "react";
import type { StringInputProps, TitledListValue } from "sanity";
import { set, unset } from "sanity";

import fromPairs from "lodash/fromPairs";
import { cn } from "@/utils/helpers/cn";

import Tooltip from "@/sanity/utils/tooltip";

const transparentCheckerboardStyle = `
.transparent-checkerboard {
  background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
    linear-gradient(-45deg, #ccc 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ccc 75%),
    linear-gradient(-45deg, transparent 75%, #ccc 75%);
  background-size: 10px 10px;
  background-position: 0 0, 0 5px, 5px -5px, -5px 0px;
}
`;

const ColoursInput: FC<StringInputProps> = props => {
  const { onChange, schemaType, value } = props;
  const values = fromPairs(
    (schemaType.options?.list ?? []).map(item => {
      const { title, value } = item as TitledListValue<string>;
      return [value, title];
    }),
  );

  return (
    <>
      <style>{transparentCheckerboardStyle}</style>
      <div className="flex flex-row gap-2">
        {Object.keys(values).map(key => (
          <Tooltip key={key} title={values[key]}>
            <button
              className={cn(
                "w-6 h-6 border-[1px] transition-colors",
                key === value
                  ? "border-sanity-purple border-[2px]"
                  : "border-gray-200",
                key === "transparent"
                  ? "transparent-checkerboard"
                  : `bg-${key}`,
              )}
              onClick={() => {
                onChange(key === value ? unset() : set(key));
              }}
            />
          </Tooltip>
        ))}
      </div>
    </>
  );
};

export default ColoursInput;
