"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { isString } from "lodash";

import { cn } from "@/utils/helpers/cn";

type TableHeadlineVariant = "primary" | "secondary";
type TableDataVerticalAlignment = "top" | "middle" | "bottom";
type TableDataHorizontalAlignment = "left" | "center" | "right";

export type TableData = {
  content: ReactNode | string;
  colspan?: number;
  rowspan?: number;
  horizontalAligment?: TableDataHorizontalAlignment;
  verticalAligment?: TableDataVerticalAlignment;
};
export type TableRow = {
  columns: Array<TableData>;
};

type Props = {
  headline?: string;
  variant: TableHeadlineVariant;
  rows: Array<TableRow>;
  firstRowAsHeader?: boolean;
  caption?: ReactNode | string;
};

/**
 * @deprecated This component is deprecated. Use the new Table component instead.
 */
const Table = ({
  headline,
  variant,
  rows,
  firstRowAsHeader,
  caption,
  ...props
}: Props) => {
  const tableDivRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const maxColumns = Math.max(...rows.map(row => row.columns?.length || 0), 1);

  // Add scroll padding if there's overflow on table
  useEffect(() => {
    const tableDiv = tableDivRef.current;
    if (tableDiv) {
      setHasOverflow(tableDiv.offsetWidth < tableDiv.scrollWidth);
    }
  }, []);

  return (
    <div {...props}>
      <h3 className={cn("mb-4", variant === "secondary" && "text-purple")}>
        {headline}
      </h3>
      <div
        className={cn(
          "overflow-x-auto scrollbar-purple-40",
          hasOverflow && "pb-4",
        )}
        ref={tableDivRef}
      >
        <table
          className="w-full table-auto border-collapse"
          style={
            {
              "--table-column-width": `calc(100% / ${maxColumns})`,
            } as CSSProperties
          }
        >
          {firstRowAsHeader && rows.length > 1 && (
            <thead>
              <tr>
                {rows[0].columns?.map((column, index) => (
                  <th
                    className={cn(
                      "font-semibold bg-purple-80 px-4 py-2 w-[calc(var(--table-column-width))] first:border-0 border-l-2 border-white min-w-[235px]",
                      column.horizontalAligment
                        ? `text-${column.horizontalAligment}`
                        : "text-left",
                      column.verticalAligment
                        ? `align-${column.verticalAligment}`
                        : "align-top",
                    )}
                    colSpan={column.colspan}
                    key={index}
                    rowSpan={column.rowspan}
                  >
                    {isString(column.content) ? (
                      <p>{column.content}</p>
                    ) : (
                      column.content
                    )}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {(firstRowAsHeader ? rows.slice(1) : rows).map((row, index) => (
              <tr key={index}>
                {row.columns?.map((column, columnIndex) => (
                  <td
                    className={cn(
                      "bg-white border-purple-80 border-l-2 border-b-2 p-4 w-[calc(var(--table-column-width))] min-w-[235px]",
                      variant === "secondary" && "last:border-r-2",
                      !firstRowAsHeader && "border-2",
                      column.horizontalAligment
                        ? `text-${column.horizontalAligment}`
                        : "text-left",
                      column.verticalAligment
                        ? `align-${column.verticalAligment}`
                        : "align-top",
                    )}
                    colSpan={column.colspan}
                    key={columnIndex}
                    rowSpan={column.rowspan}
                  >
                    {isString(column.content) ? (
                      <p>{column.content}</p>
                    ) : (
                      column.content
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <div className="mt-2 text-left">{caption}</div>}
    </div>
  );
};

export default Table;
