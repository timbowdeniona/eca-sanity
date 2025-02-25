import type { FC } from "react";

import { Button, Flex, Stack, Text } from "@sanity/ui";
import {
  MdAlignVerticalBottom,
  MdAlignVerticalCenter,
  MdAlignVerticalTop,
} from "react-icons/md";
import { LuAlignVerticalSpaceBetween } from "react-icons/lu";
import { set, StringInputProps, unset } from "sanity";
import { SanityVerticalAlignment } from "@/sanity/schema/types";

const VerticalAlignmentInput: FC<StringInputProps> = props => {
  const { value, onChange } = props;

  const handleChange = (value: SanityVerticalAlignment) => {
    onChange(value ? set(value) : unset());
  };

  return (
    <Stack space={3}>
      <Flex style={{ columnGap: 12 }}>
        <Flex direction="column" gap={2}>
          <Text size={0}>Top</Text>
          <Button
            icon={MdAlignVerticalTop}
            mode={value === "top" ? "default" : "ghost"}
            onClick={() => handleChange("top")}
          />
        </Flex>
        <Flex direction="column" gap={2}>
          <Text size={0}>Middle</Text>
          <Button
            icon={MdAlignVerticalCenter}
            mode={value === "middle" ? "default" : "ghost"}
            onClick={() => handleChange("middle")}
          />
        </Flex>
        <Flex direction="column" gap={2}>
          <Text size={0}>Bottom</Text>
          <Button
            icon={MdAlignVerticalBottom}
            mode={value === "bottom" ? "default" : "ghost"}
            onClick={() => handleChange("bottom")}
          />
        </Flex>
        <Flex direction="column" gap={2}>
          <Text size={0}>Spread</Text>
          <Button
            icon={LuAlignVerticalSpaceBetween}
            mode={value === "spread" ? "default" : "ghost"}
            onClick={() => handleChange("spread")}
          />
        </Flex>
      </Flex>
    </Stack>
  );
};

export default VerticalAlignmentInput;
