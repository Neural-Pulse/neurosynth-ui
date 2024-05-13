import { StoryFn, Meta } from "@storybook/react";
import Timeline from ".";
import { TimelineProps } from "./Timeline.types";

export default {
  title: "Components/Timeline",
  component: Timeline,
} as Meta;

const Template: StoryFn<TimelineProps> = (args) => <Timeline {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  items: [
    {
      title: "Event 1",
      description: "Description of event 1",
      time: "2023-01-01",
    },
    {
      title: "Event 2",
      description: "Description of event 2",
      time: "2023-01-02",
    },
  ],
  orientation: "vertical",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  items: [
    {
      title: "Event 1",
      description: "Description of event 1",
      time: "2023-01-01",
    },
    {
      title: "Event 2",
      description: "Description of event 2",
      time: "2023-01-02",
    },
  ],
  orientation: "horizontal",
};
