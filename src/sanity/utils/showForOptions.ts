import isArray from "lodash/isArray";
import { ConditionalProperty } from "@sanity/types";

const showForOptions =
  (main: string, sub?: string, source: "document" | "parent" = "document") =>
  (options: (string | [string, string[]])[]): ConditionalProperty =>
  props =>
    !options.find(item =>
      isArray(item)
        ? item[0] === props[source]?.[main] &&
          (!sub || item[1].includes(String(props[source]?.[sub] ?? "")))
        : props[source]?.[main] === item,
    );

export default showForOptions;
