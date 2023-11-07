// src/components/Button/Button.stories.tsx
import { Story, Meta } from '@storybook/react';
import Button from '.';
import { ButtonProps } from './Button.types';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        variant: {
            control: { type: 'select', options: ['primary', 'secondary'] },
        },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Button',
    variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Button',
    variant: 'secondary',
};
