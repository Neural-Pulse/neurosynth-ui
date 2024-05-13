import { StoryFn, Meta } from "@storybook/react";
import DatePicker from ".";
import { DatePickerProps } from "./DatePicker.types";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as Meta;

const Template: StoryFn<DatePickerProps> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "2023-01-01",
  onChange: (value) => console.log("Selected Date:", value),
};
