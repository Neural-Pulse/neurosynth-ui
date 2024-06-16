import { StoryFn, Meta } from "@storybook/react";
import Stepper from ".";
import { StepperProps } from "./Stepper.types";

export default {
  title: "Components/Stepper",
  component: Stepper,
} as Meta;

const Template: StoryFn<StepperProps> = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }],
};
