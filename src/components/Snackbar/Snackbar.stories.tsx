import { StoryFn, Meta } from "@storybook/react";
import Snackbar from ".";
import { SnackbarProps } from "./Snackbar.types";

export default {
  title: "Components/Snackbar",
  component: Snackbar,
} as Meta;

const Template: StoryFn<SnackbarProps> = (args) => <Snackbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "This is a snackbar message!",
  duration: 3000,
};
