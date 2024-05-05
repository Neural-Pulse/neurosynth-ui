import { StoryFn, Meta } from '@storybook/react';
import Breadcrumbs from '.';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import { MemoryRouter } from 'react-router-dom';

export default {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    decorators: [(Story) => <MemoryRouter>{Story()}</MemoryRouter>], // Wrap in MemoryRouter for Link components
} as Meta;

const Template: StoryFn<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
    crumbs: [
        { label: 'Home', path: '/' },
        { label: 'Library', path: '/library' },
        { label: 'Data' }
    ]
};
