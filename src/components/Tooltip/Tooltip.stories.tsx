// src/components/Tooltip/Tooltip.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tooltip from './'; // Certifique-se de importar corretamente o Tooltip
import { TooltipProps } from './Tooltip.types';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const Template: StoryFn<TooltipProps> = (args) => (
  <div className="flex items-center justify-center h-screen">
    <Tooltip {...args}>
      <button className="p-2 bg-blue-500 text-white rounded">Hover me</button>
    </Tooltip>
  </div>
);

export const Bottom = Template.bind({});
Bottom.args = {
  message: 'Tooltip on bottom',
  position: 'bottom',
};

export const Top = Template.bind({});
Top.args = {
  message: 'Tooltip on top',
  position: 'top',
};

export const Left = Template.bind({});
Left.args = {
  message: 'Tooltip on left',
  position: 'left',
};

export const Right = Template.bind({});
Right.args = {
  message: 'Tooltip on right',
  position: 'right',
};
