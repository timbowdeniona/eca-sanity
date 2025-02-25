import type { FC } from "react";
import type { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";

import type { ClassNames } from "./utils/getComponents";
import getComponents from "./utils/getComponents";

export type RichTextValue = PortableTextBlock[];
export type Props = {
  classNames?: ClassNames;
  value: RichTextValue;
};

const RichText: FC<Props> = ({ classNames, value }) => (
  <PortableText components={getComponents(classNames)} value={value} />
);

export default RichText;
