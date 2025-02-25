import { ChangeEvent, useRef, useState } from "react";
import { cn } from "@/utils/helpers/cn";

import { Button } from "@/components/storybook/button";
import CloseIcon from "@/components/storybook/icons/Close";

type Props = {
  initialFilename?: string;
  className?: string;
  labelClass?: string;
  id?: string;
  label?: string;
  hint?: string;
  helpText?: string;
  helpTextClass?: string;
  placeholder?: string;
  onChange?: (file: File | null) => void;
  accept?: string;
  name?: string;
  error?: string;
  onBlur?: () => void;
};

export function FileInput({
  accept,
  initialFilename,
  labelClass,
  className,
  label,
  helpText,
  helpTextClass,
  placeholder,
  hint,
  id,
  name,
  error,
  onChange,
  onBlur,
}: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [filename, setFilename] = useState(initialFilename ?? "");

  const buttonLabel = filename ? "Replace file" : "Choose a file";

  /**
   * Update displayed filename and call `onChange` callback with the selected file.
   */
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as File;
    setFilename(file?.name);
    onChange?.(file);
    (fileRef.current as HTMLInputElement).value = "";
  };

  /**
   * Remove the selected file
   */
  const removeFile = () => {
    onChange?.(null);
    setFilename("");
    (fileRef.current as HTMLInputElement).value = "";
  };

  return (
    <div className={className} onBlur={onBlur} tabIndex={0}>
      {(label || hint) && (
        <div className="flex justify-between">
          {label && (
            <label className={cn("mb-0.5", labelClass)} htmlFor={id}>
              {label}
            </label>
          )}
          {hint && <p className="text-sm">{hint}</p>}
        </div>
      )}
      {helpText && (
        <p className={cn("text-sm text-muted mb-1", helpTextClass)}>
          {helpText}
        </p>
      )}
      <div className="flex border border-purple-80 pr-2">
        <Button
          aria-label={buttonLabel}
          className="h-11 shrink-0 rounded-none px-5"
          color="red"
          mode="button"
          onClick={() => fileRef.current?.click()}
          type="button"
          variant="primary"
        >
          {buttonLabel}
        </Button>
        <div className="flex w-full items-center px-4 text-muted">
          <p className="line-clamp-1">
            {filename || placeholder || "No file chosen"}
          </p>
        </div>
        {filename && (
          <button
            aria-label="Remove file"
            className="shrink-0"
            onClick={removeFile}
            type="button"
          >
            <CloseIcon className="size-6 rounded-full fill-muted p-0.5 hover:bg-grey hover:fill-purple" />
          </button>
        )}
      </div>
      <input
        accept={accept}
        aria-label="File input"
        className="hidden"
        name={name}
        onInput={handleFileChange}
        ref={fileRef}
        type="file"
      />
      {error && (
        <small className="mt-0.5 block text-sm text-red">{error}</small>
      )}
    </div>
  );
}

export default FileInput;
