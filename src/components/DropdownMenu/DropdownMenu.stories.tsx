import { StoryFn, Meta } from "@storybook/react";
import DropdownMenu from ".";
import { DropdownMenuProps } from "./DropdownMenu.types";

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
} as Meta;

const Template: StoryFn<DropdownMenuProps> = (args) => (
  <div style={{ maxWidth: "300px" }}>
    <DropdownMenu {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "Options",
  items: [
    { label: "Profile", action: () => console.log("Profile clicked") },
    { label: "Settings", action: () => console.log("Settings clicked") },
    { label: "Logout", action: () => console.log("Logout clicked") },
  ],
};
