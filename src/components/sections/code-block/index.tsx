import { type FC } from "react";

import CodeBlock from "@/components/storybook/code-block";
import { type SanityCodeBlock } from "@/sanity/schema/presentation/sectionType/sections/codeBlock";

interface Props {
  section: SanityCodeBlock;
}

const CodeBlockSection: FC<Props> = ({ section }) => {
  return <CodeBlock {...section} />;
};

export default CodeBlockSection;
