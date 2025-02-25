import type { PortableTextReactComponents } from "@portabletext/react";
import fromPairs from "lodash/fromPairs";

import type {
  Attachment,
  BlockStyle,
  ListItemType,
  MarkType,
} from "@/sanity/types";
import blockComponents from "../components/block";
import listComponents from "../components/list";
import listItemComponents from "../components/list-item";
import markComponents from "../components/mark";
import typeComponents from "../components/types";

export type ClassNames = Record<string, string | undefined>;

const getComponents = (
  classNames: ClassNames = {
    list: "pl-5",
  },
): Partial<PortableTextReactComponents> => ({
  block: fromPairs(
    Object.keys(blockComponents).map(block => [
      block,
      ({ children }) => {
        const Component = blockComponents[block as BlockStyle];
        return <Component>{children}</Component>;
      },
    ]),
  ),
  list: fromPairs(
    Object.keys(listComponents).map(block => [
      block,
      ({ children }) => {
        const Component = listComponents[block as ListItemType];
        return <Component className={classNames?.list}>{children}</Component>;
      },
    ]),
  ),
  listItem: fromPairs(
    Object.keys(listItemComponents).map(block => [
      block,
      ({ children }) => {
        const Component = listItemComponents[block as ListItemType];
        return <Component>{children}</Component>;
      },
    ]),
  ),
  marks: fromPairs(
    Object.keys(markComponents).map(block => [
      block,
      ({ children, value }) => {
        const Component = markComponents[block as MarkType];
        return <Component value={value}>{children}</Component>;
      },
    ]),
  ),
  types: fromPairs(
    Object.keys(typeComponents).map(block => [
      block,
      ({ value }) => {
        const Component = typeComponents[block as Attachment];
        return <Component value={value} />;
      },
    ]),
  ),
});

export default getComponents;
