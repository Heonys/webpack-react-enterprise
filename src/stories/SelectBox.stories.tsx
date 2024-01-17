import { Meta, Story } from "@storybook/react";
import { SelectBox, SelectBoxProps } from "./SelectBox";
import { useState } from "react";

export default {
  title: "Example/SelectBox",
  component: SelectBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    borderColor: { control: "color" },
    fontColor: { control: "color" },
  },
} satisfies Meta<typeof SelectBox>;

const Template: Story<SelectBoxProps> = (args) => {
  const Wrapper = () => {
    const [value, setValue] = useState(args.value);

    return (
      <SelectBox
        {...args}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)}
      />
    );
  };

  return <Wrapper />;
};

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ],
  value: "option1",
};
