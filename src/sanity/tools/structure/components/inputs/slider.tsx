import React, { useCallback, useMemo } from "react";
import { Card, Flex, Text } from "@sanity/ui";
import { NumberInputProps, set } from "sanity";

export type SliderInputProps = NumberInputProps & {
  schemaType: {
    options?: {
      min?: number;
      max?: number;
      step?: number;
    };
  };
};

export function RangeSliderInput(props: SliderInputProps) {
  const { schemaType, value, onChange } = props;
  const { options } = schemaType;

  const { min, max, step } = useMemo(() => {
    return {
      min: options?.min ?? 0,
      max: options?.max ?? 100,
      step: options?.step ?? 1,
    };
  }, [options]);

  const percentage = useMemo(() => {
    const v = value ?? min;
    return ((v - min) / (max - min)) * 100;
  }, [value, min, max]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(event.target.value);
      onChange(set(newValue));
    },
    [onChange],
  );

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
              width: `${percentage}%`,
              top: "50%",
              height: "4px",
              backgroundColor: "var(--card-focus-ring-color)",
              transform: "translateY(-50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: `${percentage}%`,
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
            max={max}
            min={min}
            onChange={handleChange}
            step={step}
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
            value={value ?? min}
          />
        </div>
        {!options?.list && <Text size={1}>Current value: {value ?? min}%</Text>}
        {options?.list && (
          <Flex justify="space-between">
            {options.list.map((item, i) => (
              <Text key={i} muted size={1}>
                {typeof item === "number" ? item : item.title}
              </Text>
            ))}
          </Flex>
        )}
      </Flex>
    </Card>
  );
}

export default RangeSliderInput;
