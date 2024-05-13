// src/components/Button/Button.stories.tsx
import { StoryFn, Meta } from "@storybook/react";
import Button from ".";
import { ButtonProps } from "./Button.types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: { type: "select", options: ["contained", "outlined", "text"] },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  label: "Contained Button",
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined Button",
  variant: "outlined",
};

export const text = Template.bind({});
text.args = {
  label: "text Button",
  variant: "text",
};
