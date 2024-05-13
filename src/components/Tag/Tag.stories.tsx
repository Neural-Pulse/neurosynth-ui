import { StoryFn, Meta } from "@storybook/react";
import Tag from ".";
import { TagProps } from "./Tag.types";

export default {
  title: "Components/Tag",
  component: Tag,
} as Meta;

const Template: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Example Tag",
  color: "neuralpulse-green",
};

export const Closable = Template.bind({});
Closable.args = {
  label: "Closable Tag",
  onClose: () => alert("Tag closed"),
  color: "neuralpulse-gray",
};
