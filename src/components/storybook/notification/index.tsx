"use client";

import { cn } from "@/utils/helpers/cn";
import { ComponentProps } from "react";

export type NotificationVariant = "red" | "green";

type NotificationProps = {
  variant: NotificationVariant;
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
} & ComponentProps<"div">;

export const Notification = ({
  children,
  variant,
  className,
  isOpen,
  ...props
}: NotificationProps) => {
  const variantClassnames: Record<NotificationVariant, string> = {
    red: "bg-red text-white fill-white",
    green: "bg-green text-white fill-white",
  };

  // TODO: Manual Close Notification not supported
  // const closeNotification = () => {
  //   onClose?.();
  // };

  return (
    <div
      aria-live="assertive"
      className={cn(
        "fixed inset-0 h-[88px] md:h-16 z-[100] flex items-center transition-translate duration-150",
        isOpen && "translate-y-0 opacity-100",
        !isOpen && "-translate-y-[88px] md:-translate-y-16 opacity-0",
        variantClassnames[variant],
        className,
      )}
      {...props}
    >
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default Notification;
