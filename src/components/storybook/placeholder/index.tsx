import { cn } from "@/utils/helpers/cn";

export const Placeholder = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-purple-80 ", className)}
      {...props}
    />
  );
};
