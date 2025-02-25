import { cn } from "@/utils/helpers/cn";
import CloseIcon from "@/components/storybook/icons/Close";

type Props = {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  wrapperClass?: string;

  /**
   * Tailwind CSS max-width class name
   */
  maxWidthClass?: string;

  onClose?: () => void;
};

export const Modal = ({
  id = "aqa-modal",
  title,
  children,
  className,
  maxWidthClass = "max-w-2xl",
  wrapperClass = "",
  onClose,
}: Props) => {
  return (
    <div className={cn("fixed inset-0 bottom-0", className)} id={id}>
      <div
        aria-labelledby={`${id}-title`}
        aria-modal="true"
        className={cn(
          "flex justify-center items-center overflow-y-auto overflow-x-hidden w-full absolute h-[calc(100%-1rem)] max-h-screen",
          wrapperClass,
        )}
        role="dialog"
      >
        <div className={cn(maxWidthClass, "relative p-4 w-full max-h-full")}>
          <div className="relative z-40 bg-white shadow">
            <div
              className={cn(
                "flex items-center justify-between border-b border-b-grey p-4 md:p-5",
              )}
            >
              <h3 id={`${id}-title`}>{title}</h3>
              <button onClick={onClose}>
                <CloseIcon aria-label="Close" className="size-5 fill-red" />
              </button>
            </div>
            {children}
          </div>
          <div
            aria-hidden="true"
            className={cn("fixed inset-0 w-screen bg-neutral/60")}
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};
