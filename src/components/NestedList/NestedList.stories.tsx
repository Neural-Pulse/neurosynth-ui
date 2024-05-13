import { Meta, StoryFn } from "@storybook/react";
import NestedList from ".";
import { Item, NestedListProps } from "./NestedList.types";

export default {
  title: "Components/NestedList",
  component: NestedList,
} as Meta;

const Template: StoryFn<NestedListProps> = (args) => <NestedList {...args} />;

const Items: Item[] = [
  {
    title: "Item 1",
    subItems: [{ title: "Subitem 1.1" }, { title: "Subitem 1.2" }],
  },
  {
    title: "Item 2",
    subItems: [
      {
        title: "Subitem 2.1",
        subItems: [{ title: "Subitem 2.1.1" }, { title: "Subitem 2.1.2" }],
      },
      { title: "Subitem 2.2" },
    ],
  },
  { title: "Item 3" },
];

export const Default = Template.bind({});
Default.args = {
  items: Items,
};
