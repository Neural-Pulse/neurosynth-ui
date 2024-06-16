import { StoryFn, Meta } from "@storybook/react";
import Tabs from ".";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { id: "tab1", title: "Tab 1", content: "Content of Tab 1" },
    { id: "tab2", title: "Tab 2", content: "Content of Tab 2" },
    { id: "tab3", title: "Tab 3", content: "Content of Tab 3" },
  ],
};
