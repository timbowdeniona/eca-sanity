import { ComponentProps, type FC } from "react";
import { cn } from "@/utils/helpers/cn";

type Props = {
  className?: string;
  embedLink: string;
  minHeight?: number;
} & ComponentProps<"div">;

export const Embed: FC<Props> = ({
  className,
  embedLink,
  minHeight = 180, // Default minimum height
  ...props
}) => {
  return (
    <div className="wrapper" {...props}>
      <div className={cn("w-full", className)}>
        <iframe
          className="w-full"
          loading="lazy"
          src={embedLink}
          style={{ minHeight }}
        ></iframe>
      </div>
    </div>
  );
};

export default Embed;
