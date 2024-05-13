
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Select from '.';

export default {
    title: 'Components/Select',
    component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 'default-select',
    label: 'Choose an option',
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ],
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
    id: 'custom-theme-select',
    label: 'Custom Theme Select',
    theme: {
        labelColor: 'text-red-500',
        borderColor: 'border-green-500',
        focusRingColor: 'focus:ring-blue-500',
        shadow: 'shadow-lg'
    },
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ],
};
