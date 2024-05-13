import { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { TextFieldProps } from "./TextField.types";
import TextField from ".";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <TextField
      {...args}
      value={value}
      onChange={(e) => {
        args.onChange(e);
        setValue(e.target.value);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "default",
  name: "default",
  placeholder: "Digite algo...",
  label: "Campo de Texto Padrão",
  value: "",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  id: "error",
  label: "Campo de Texto com Erro",
};
