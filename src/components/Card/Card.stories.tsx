import { Story, Meta } from "@storybook/react";
import Card from ".";
import { CardProps } from "./Card.types";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
  text: "This is a card component using the custom Tailwind colors.",
};
