import type { FC } from "react";

import type { SanityImageBlockAlignment } from "@/sanity/schema/presentation/sectionType/sections/imageBlock";

import { Button, Flex, Stack, Text } from "@sanity/ui";
import {
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
} from "react-icons/md";
import { set, StringInputProps, unset } from "sanity";

type AlignmentValue = SanityImageBlockAlignment;

const AlignmentInput: FC<StringInputProps> = props => {
  const { value, onChange } = props;

  const handleChange = (value: AlignmentValue) => {
    onChange(value ? set(value) : unset());
  };

  return (
    <Stack space={3}>
      <Flex style={{ columnGap: 12 }}>
        <Flex direction="column" gap={2} style={{ marginRight: 24 }}>
          <Text size={0}>Full Width</Text>
          <Button
            icon={MdFormatAlignJustify}
            mode={value === "full" ? "default" : "ghost"}
            onClick={() => handleChange("full")}
          />
        </Flex>
        <Flex direction="column" gap={2}>
          <Text size={0}>Left</Text>
          <Button
            icon={MdFormatAlignLeft}
            mode={value === "left" ? "default" : "ghost"}
            onClick={() => handleChange("left")}
          />
        </Flex>
        <Flex direction="column" gap={2}>
          <Text size={0}>Centre</Text>
          <Button
            icon={MdFormatAlignCenter}
            mode={value === "centre" ? "default" : "ghost"}
            onClick={() => handleChange("centre")}
          />
        </Flex>
        <Flex direction="column" gap={2}>
          <Text size={0}>Right</Text>
          <Button
            icon={MdFormatAlignRight}
            mode={value === "right" ? "default" : "ghost"}
            onClick={() => handleChange("right")}
          />
        </Flex>
      </Flex>
    </Stack>
  );
};

export default AlignmentInput;
