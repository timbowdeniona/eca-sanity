import RadioInput, { Props as RadioInputProps } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "Components/RadioInput",

  component: RadioInput,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof RadioInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    label: "This is an option",
    name: "single-sample",
    value: "single-option",
    checked: false,
  },

  render: function Component(args: RadioInputProps) {
    const [, setArgs] = useArgs();

    return (
      <RadioInput
        {...args}
        checked={args.value === "single-option"}
        onChange={e => setArgs({ value: e.currentTarget.value })}
      />
    );
  },
};

export const WithMultiOptions: StoryObj<RadioInputProps> = {
  args: {
    name: "multi-sample",
  },

  render: function Component(args: RadioInputProps) {
    const [, setArgs] = useArgs();

    return (
      <div className="space-y-4">
        {new Array(3).fill(0).map((_, i) => (
          <RadioInput
            {...args}
            checked={args.value === `option-${i}`}
            key={i}
            label={`This is option ${i + 1}`}
            onChange={e => setArgs({ value: e.currentTarget.value })}
            value={`option-${i}`}
          />
        ))}
      </div>
    );
  },
};
