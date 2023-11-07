import { Story, Meta } from '@storybook/react';
import Warning from './index';
import { WarningProps } from './Warning.types';

export default {
    title: 'Components/Warning',
    component: Warning,
} as Meta;

const Template: Story<WarningProps> = (args) => <Warning {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'This is a warning component using the custom Tailwind colors.',
};