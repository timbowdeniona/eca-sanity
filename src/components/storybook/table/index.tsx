"use client";

import { cn } from "@/utils/helpers/cn";
import type React from "react";
import { ComponentProps, createContext, useContext } from "react";

const TableContext = createContext<{
  noRightBorder: boolean;
}>({
  noRightBorder: false,
});

export function Table({
  noRightBorder,
  fixed,
  mobileFixed,
  className,
  children,
  ...props
}: {
  noRightBorder?: boolean;
  fixed?: boolean;
  mobileFixed?: boolean;
} & ComponentProps<"div">) {
  return (
    <TableContext.Provider
      value={{ noRightBorder } as React.ContextType<typeof TableContext>}
    >
      <div
        {...props}
        className={cn("overflow-x-auto scrollbar-purple-40", className)}
      >
        <table
          className={cn(
            "w-full border-collapse",
            mobileFixed ? "table-fixed" : "table-auto",
            fixed ? "md:table-fixed" : "md:table-auto",
          )}
        >
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
}

export function TableHead({ className, ...props }: ComponentProps<"thead">) {
  return (
    <thead {...props} className={cn(className, "font-semibold bg-purple-80")} />
  );
}

export function TableBody({ className, ...props }: ComponentProps<"tbody">) {
  return <tbody {...props} className={cn("bg-white ", className)} />;
}

export function TableRow({
  className,
  ...props
}: {
  href?: string;
  target?: string;
  title?: string;
} & ComponentProps<"tr">) {
  return <tr {...props} className={cn(className)} />;
}

export function TableHeader({
  className,
  align = "left",
  valign = "top",
  ...props
}: {
  align?: "left" | "center" | "right";
  valign?: "top" | "middle" | "bottom";
} & ComponentProps<"th">) {
  return (
    <th
      {...props}
      className={cn(
        "px-4 py-2 border-r-2 border-white min-w-[235px]",
        "first:border-l-2 first:border-l-purple-80",
        "last:border-r-purple-80",
        align ? `text-${align}` : "text-left",
        valign ? `align-${valign}` : "align-top",
        className,
      )}
    />
  );
}

export function TableCell({
  className,
  children,
  align = "left",
  valign = "top",
  ...props
}: {
  align?: "left" | "center" | "right";
  valign?: "top" | "middle" | "bottom";
} & ComponentProps<"td">) {
  const { noRightBorder } = useContext(TableContext);

  return (
    <td
      {...props}
      className={cn(
        "border-purple-80 border-t-2 border-l-2 border-b-2 p-4 min-w-[235px]",
        !noRightBorder && "last:border-r-2",
        align ? `text-${align}` : "text-left",
        valign ? `align-${valign}` : "align-top",
        className,
      )}
    >
      {children}
    </td>
  );
}
