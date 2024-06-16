// src/components/Warning/Warning.stories.tsx
import { StoryFn, Meta } from "@storybook/react";
import Warning from ".";
import { WarningProps } from "./Warning.types";

export default {
  title: "Components/Warning",
  component: Warning,
  argTypes: {
    text: { control: "text" },
    variant: {
      control: { type: "select", options: ["success", "warning", "error"] },
    },
  },
} as Meta;

const Template: StoryFn<WarningProps> = (args) => <Warning {...args} />;

export const Success = Template.bind({});
Success.args = {
  text: "This is a success message!",
  variant: "success",
};

export const WarningStory = Template.bind({});
WarningStory.args = {
  text: "This is a warning message!",
  variant: "warning",
};

export const Error = Template.bind({});
Error.args = {
  text: "This is an error message!",
  variant: "error",
};
