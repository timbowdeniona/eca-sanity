import { cn } from "@/utils/helpers/cn";
import { Input } from "../input";
import { ChangeEvent, FocusEvent, ReactNode, Ref } from "react";

type Props = {
  className?: string;
  placeholder?: string;
  error?: string;
  helpText?: string;
  hint?: string;
  label?: string;
  type?: string;
  required?: boolean;
  rows?: number;
  icon?: ReactNode;
  disabled?: boolean;
  value?: string | number;
  name?: string;
  ref?: Ref<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
};

export const FormInput = ({
  className,
  error,
  helpText,
  hint,
  label,
  type = "text",
  placeholder,
  required = false,
  disabled = false,
  rows = 3,
  value,
  icon,
  name,
  ref,
  onChange,
  onBlur,
}: Props) => {
  return (
    <Input
      className={cn("!w-full !max-w-none", className)}
      disabled={disabled}
      error={error}
      helpText={helpText}
      helpTextClass="mb-1"
      hint={hint}
      icon={icon}
      iconButtonClass="top-2.5 fill-purple"
      inputClass={cn("disabled:!bg-purple-80", type !== "textarea" && "h-11")}
      inputWrapperClass="border border-purple-80 relative"
      label={label}
      labelClass="text-base font-normal"
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      ref={ref}
      required={required}
      rows={rows}
      type={type}
      value={value}
    />
  );
};
