import { StoryFn, Meta } from '@storybook/react';
import Select from '.';
import { SelectProps } from './Select.types';

export default {
    title: 'Components/Select',
    component: Select,
} as Meta;

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Escolha uma opção',
    options: [
        { value: 'option1', label: 'Opção 1' },
        { value: 'option2', label: 'Opção 2' },
        { value: 'option3', label: 'Opção 3' },
    ],
};
