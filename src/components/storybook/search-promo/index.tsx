import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers/cn";
import SearchInput from "../search-input";

type Props = {
  headline?: string;
  description?: string;
  search?: ComponentProps<typeof SearchInput>;
} & ComponentProps<"div">;

export const SearchPromo = ({
  className,
  headline,
  description,
  search,
  ...props
}: Props) => {
  return (
    <div
      className={cn("bg-grey pt-6 lg:pt-12 pb-4 lg:pb-12", className)}
      {...props}
    >
      <div className="wrapper">
        <div className="bg-purple-20 p-6 md:px-12 md:py-8 lg:py-12">
          <div className="mb-6 flex flex-col gap-2 text-white">
            {headline && <h2>{headline}</h2>}
            {description && <p className="lead">{description}</p>}
          </div>
          <SearchInput className="w-full md:w-[431px]" {...search} />
        </div>
      </div>
    </div>
  );
};

export default SearchPromo;
