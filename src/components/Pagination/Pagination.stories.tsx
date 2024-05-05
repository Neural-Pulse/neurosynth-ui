import { StoryFn, Meta } from '@storybook/react';
import Pagination from '.';
import { PaginationProps } from './Pagination.types';

export default {
    title: 'Components/Pagination',
    component: Pagination,
} as Meta;

const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
    currentPage: 1,
    totalPages: 5,
};
