import { StoryFn, Meta } from "@storybook/react";
import Dialog from ".";
import { DialogProps } from "./Dialog.types";

export default {
  title: "Components/Dialog",
  component: Dialog,
} as Meta;

const Template: StoryFn<DialogProps> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => alert("Closed!"),
  onConfirm: () => alert("Confirmed!"),
  title: "Confirm Action",
  children: "Are you sure you want to perform this action?",
};
