import { useState } from "react";
import { Story, Meta } from "@storybook/react";
import Modal from ".";
import { ModalProps } from "./Modal.types";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  return <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Modal Title",
  children: <p>This is a modal component using the custom Tailwind colors.</p>,
};
