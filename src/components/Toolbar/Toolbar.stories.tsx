import { StoryFn, Meta } from "@storybook/react";
import Toolbar from ".";
import { ToolbarProps } from "./Toolbar.types";
import Button from "../Button";

export default {
  title: "Components/Toolbar",
  component: Toolbar,
} as Meta;

const Template: StoryFn<ToolbarProps> = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Neural Pulse",
  onMenuClick: () => alert("Menu clicked!"),
};

export const WithExtraContent = Template.bind({});
WithExtraContent.args = {
  ...Default.args,
  children: (
    <Button
      variant="text"
      label="Click me"
      onClick={() => alert("Button clicked")}
    />
  ),
};
