import { StoryFn, Meta } from "@storybook/react";
import Table from ".";
import { TableProps } from "./Table.types";

export default {
  title: "Components/Table",
  component: Table,
} as Meta;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { name: "John Doe", age: 30 },
    { name: "Jane Doe", age: 25 },
  ],
  columns: [
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
  ],
};
