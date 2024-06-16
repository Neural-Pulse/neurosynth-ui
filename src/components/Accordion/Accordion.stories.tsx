import { StoryFn, Meta } from '@storybook/react';
import Accordion from './';
import { AccordionProps } from './Accordion.types';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Section 1', content: 'Content 1', isOpenInitially: true },
    { title: 'Section 2', content: 'Content 2' },
    { title: 'Section 3', content: 'Content 3' },
  ],
};

export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
  items: [
    { title: 'Section 1', content: 'Content 1', isOpenInitially: true },
    { title: 'Section 2', content: 'Content 2', isOpenInitially: true },
    { title: 'Section 3', content: 'Content 3' },
  ],
};

export const Customized = Template.bind({});
Customized.args = {
  items: [
    { title: 'Section 1', content: 'Content 1', isOpenInitially: true },
    { title: 'Section 2', content: 'Content 2' },
    { title: 'Section 3', content: 'Content 3' },
  ],
  className: 'border-2 border-blue-500',
};
