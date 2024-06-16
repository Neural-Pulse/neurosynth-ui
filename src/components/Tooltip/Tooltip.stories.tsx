import { StoryFn, Meta } from "@storybook/react";
import Tooltip from ".";
import Button from "../Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Top = Template.bind({});
Top.args = {
  message: "Tooltip on Top",
  position: "top",
  children: (
    <Button
      variant="text"
      label="Hover me"
      onClick={() => alert("Button clicked!")}
    />
  ),
};

export const Bottom = Template.bind({});
Bottom.args = {
  message: "Tooltip on Bottom",
  position: "bottom",
  children: (
    <Button
      variant="text"
      label="Hover me"
      onClick={() => alert("Button clicked!")}
    />
  ),
};
