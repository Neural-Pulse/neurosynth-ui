// Avatar.stories.tsx
import { StoryFn, Meta } from "@storybook/react";
import Avatar from ".";
import { AvatarProps } from "./Avatar.types";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/150",
  size: 50,
  name: "John Doe",
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  size: 50,
  name: "John Doe",
};

export const Large = Template.bind({});
Large.args = {
  src: "https://via.placeholder.com/150",
  size: 100,
  name: "John Doe",
};
