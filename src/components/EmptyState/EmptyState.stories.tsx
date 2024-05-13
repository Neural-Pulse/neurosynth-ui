import { StoryFn, Meta } from "@storybook/react";
import EmptyState from ".";
import { EmptyStateProps } from "./EmptyState.types";

export default {
  title: "Components/EmptyState",
  component: EmptyState,
} as Meta;

const Template: StoryFn<EmptyStateProps> = (args) => <EmptyState {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "No data to display here.",
  actionText: "Create New",
  onAction: () => alert("Action triggered!"),
};
