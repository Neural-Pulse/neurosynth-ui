import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PasswordField from ".";

export default {
  title: "Components/PasswordField",
  component: PasswordField,
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof PasswordField>;

const Template: ComponentStory<typeof PasswordField> = (args) => (
  <PasswordField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "password",
  name: "password",
  placeholder: "Enter your password",
  label: "Password",
};

export const WithValue = Template.bind({});
WithValue.args = {
  id: "password",
  name: "password",
  placeholder: "Enter your password",
  label: "Password",
  value: "secret123",
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  id: "password",
  name: "password",
  placeholder: "Enter your password",
};
