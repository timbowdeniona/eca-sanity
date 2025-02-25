import { FC, type ReactElement } from "react";
import { Box, Tooltip as SanityTooltip, Text } from "@sanity/ui";

type Props = {
  children: ReactElement;
  title: string;
};
const Tooltip: FC<Props> = ({ children, title }) => (
  <SanityTooltip
    content={
      <Box padding={2}>
        <Text muted size={1}>
          {title}
        </Text>
      </Box>
    }
    fallbackPlacements={["right", "left"]}
    placement="top"
    portal
  >
    {children}
  </SanityTooltip>
);

export default Tooltip;
