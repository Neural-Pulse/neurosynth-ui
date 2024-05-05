import { StoryFn, Meta } from '@storybook/react';
import TimePicker from '.';
import { TimePickerProps } from './TimePicker.types';

export default {
    title: 'Components/TimePicker',
    component: TimePicker,
} as Meta;

const Template: StoryFn<TimePickerProps> = (args) => <TimePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: '09:00',
    onChange: (value) => console.log('Selected Time:', value),
};
