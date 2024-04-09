import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import RadioButton from '.';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta;

// Criamos um Template interativo que mantém o estado do RadioButton selecionado
const InteractiveTemplate: Story<RadioButtonProps> = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <RadioButton
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  id: 'radio1',
  name: 'radioGroup',
  label: 'Option 1',
};