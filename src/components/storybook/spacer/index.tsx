import { ComponentProps, type FC } from "react";
import { cn } from "@/utils/helpers/cn";

type Props = {
  className?: string;
  divider: boolean;
  marginBottom: number;
  marginTop: number;
} & ComponentProps<"div">;

export const Spacer: FC<Props> = ({
  className,
  divider,
  marginBottom,
  marginTop,
}) => {
  return (
    <div
      className={cn("w-full border-none wrapper", className)}
      style={{ marginBottom: marginBottom * 4, marginTop: marginTop * 4 }}
    >
      {divider && <div className="h-1 w-full bg-purple-80" />}
    </div>
  );
};

export default Spacer;
