import React from "react";

export type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  label: string;
  name: string;
  value: string | number;
};

function RadioInput({
  onChange,
  checked,
  label,
  value,
  name,
  ...props
}: Props) {
  return (
    <label className="inline-flex cursor-pointer gap-2" {...props}>
      <input
        checked={checked}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <span>{label}</span>
    </label>
  );
}

export default RadioInput;
