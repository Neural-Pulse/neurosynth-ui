import React from 'react';
import { Story, Meta } from '@storybook/react';
import List from '.';
import { ListProps } from './List.types';

export default {
    title: 'Components/List',
    component: List,
    argTypes: {
        onItemClick: { action: 'clicked' },
    },
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: ['Item 1', 'Item 2', 'Item 3'],
};

export const WithClickAction = Template.bind({});
WithClickAction.args = {
    ...Default.args,
    onItemClick: (item: any) => {
        alert(item); // Substituído por um alert para exemplo visual
    },
};
