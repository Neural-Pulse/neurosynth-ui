import { Meta, StoryFn } from "@storybook/react";
import ProgressBar from ".";
import { ProgressBarProps } from "./ProgressBar.types";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: {
      control: { type: "range", min: 0, max: 100 },
    },
    color: {
      control: "color",
    },
    label: {
      control: "text",
    },
  },
} as Meta;

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  label: "Progress",
  color: "#16a085",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  color: "#204a87",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: "Loading...",
  color: "#16a085",
};

export const FullProgress = Template.bind({});
FullProgress.args = {
  ...Default.args,
  progress: 100,
  color: "#16a085",
};

export const EmptyProgress = Template.bind({});
EmptyProgress.args = {
  ...Default.args,
  progress: 0,
  color: "#16a085",
};
