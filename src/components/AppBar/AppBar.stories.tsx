import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import AppBar from ".";
import { AiOutlineMenu } from "react-icons/ai"; // Assuming you're using react-icons for icons

const defaultUser = {
  name: "Jane Doe",
  avatar:
    "https://gravatar.com/avatar/da2f1a85693324065d7f9a316e3f2e59?s=400&d=robohash&r=x", // Replace with the actual path to the avatar image or URL
};

export default {
  title: "Components/AppBar",
  component: AppBar,
} as Meta;

const Template: StoryFn<typeof AppBar> = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  leading: <AiOutlineMenu size="24" className="text-neuralpulse-green" />,
  title: "NeuralPulse Dashboard",
  user: defaultUser,
};
