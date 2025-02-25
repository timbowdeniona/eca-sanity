import React, { useCallback, useMemo } from "react";
import { Card, Flex, Text } from "@sanity/ui";
import { set } from "sanity";
import { SliderInputProps } from "./slider";

const ratios = [
  { value: 3, label: "3:9" },
  { value: 4, label: "4:8" },
  { value: 5, label: "5:7" },
  { value: 6, label: "6:6" },
  { value: 7, label: "7:5" },
  { value: 8, label: "8:4" },
  { value: 9, label: "9:3" },
];

export function ColumnsSliderInput(props: SliderInputProps) {
  const { value, onChange } = props;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(event.target.value);
      onChange(set(newValue));
    },
    [onChange],
  );

  const currentRatio = useMemo(() => {
    const ratio = ratios.find(r => r.value === value) || ratios[0];
    return `${ratio.value}:${12 - ratio.value}`;
  }, [value]);

  return (
    <Card padding={3} radius={2}>
      <Flex direction="column" gap={3}>
        <div style={{ position: "relative", height: "24px" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "50%",
              height: "4px",
              backgroundColor: "var(--card-border-color)",
              transform: "translateY(-50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              width: `${(((value || 3) - 3) / 6) * 100}%`,
              top: "50%",
              height: "4px",
              backgroundColor: "var(--card-focus-ring-color)",
              transform: "translateY(-50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: `${(((value || 3) - 3) / 6) * 100}%`,
              top: "50%",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "var(--card-focus-ring-color)",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 0 4px var(--card-bg-color)",
              pointerEvents: "none",
            }}
          />
          <input
            max={9}
            min={3}
            onChange={handleChange}
            step={1}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0,
              cursor: "pointer",
            }}
            type="range"
            value={value || 3}
          />
        </div>
        <Text size={1}>Current ratio: {currentRatio}</Text>
        <Flex justify="space-between">
          {ratios.map(ratio => (
            <Text key={ratio.value} muted size={1}>
              {ratio.label}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}

export default ColumnsSliderInput;
