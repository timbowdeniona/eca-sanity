import { ComponentProps, HTMLInputTypeAttribute, ReactNode } from "react";

import { cn } from "@/utils/helpers/cn";

type Props = {
  icon?: ReactNode;
  iconButtonClass?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  helpText?: string;
  hint?: string;
  inputWrapperClass?: string;
  inputClass?: string;
  labelClass?: string;
  helpTextClass?: string;
  errorClass?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
} & ComponentProps<"input" | "textarea">;

export const Input = ({
  className,
  icon,
  iconButtonClass,
  label,
  hint,
  placeholder,
  error,
  inputWrapperClass,
  inputClass,
  helpText,
  labelClass,
  helpTextClass,
  errorClass,
  type = "text",
  required = false,
  ...rest
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 max-w-[480px] md:w-[480px]",
        className,
      )}
    >
      {(label || hint) && (
        <div className="flex justify-between">
          {label && (
            <label
              className={cn("text-sm font-semibold", labelClass)}
              htmlFor={rest.id}
            >
              {label}
              {required && <span className="ml-1 text-red">*</span>}
            </label>
          )}
          {hint && <p className="text-sm">{hint}</p>}
        </div>
      )}
      {helpText && (
        <p className={cn("text-sm text-muted", helpTextClass)}>{helpText}</p>
      )}
      <div
        className={cn(
          "w-full",
          inputWrapperClass,
          error && " border border-red",
        )}
      >
        {type !== "textarea" ? (
          <>
            <input
              {...(rest as ComponentProps<"input">)}
              aria-label={label || placeholder}
              className={cn(
                "h-12 w-full text-ellipsis px-4 focus:outline-1 focus:outline-purple-40 disabled:bg-white disabled:text-neutral",
                inputClass,
              )}
              placeholder={placeholder}
              type={type}
            />
            {icon && (
              <button
                aria-label={`Icon for ${label || placeholder} field`}
                className={cn("absolute right-4 top-4", iconButtonClass)}
                type="button"
              >
                {icon}
              </button>
            )}
          </>
        ) : (
          <textarea
            {...(rest as ComponentProps<"textarea">)}
            className={cn(
              "block w-full px-4 py-2 focus:outline-1 focus:outline-purple-40 disabled:bg-white disabled:text-neutral",
              inputClass,
            )}
          />
        )}
      </div>
      {error && (
        <small className={cn("block text-sm text-red", errorClass)}>
          {error}
        </small>
      )}
    </div>
  );
};
