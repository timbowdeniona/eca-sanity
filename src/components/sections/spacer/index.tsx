import { type FC } from "react";

import type { SanitySpacer } from "@/sanity/schema/presentation/sectionType/sections/spacer";
import Spacer from "@/components/storybook/spacer";

interface Props {
  section: SanitySpacer;
}

const SpacerSection: FC<Props> = ({ section }) => {
  return <Spacer {...section} />;
};

export default SpacerSection;
