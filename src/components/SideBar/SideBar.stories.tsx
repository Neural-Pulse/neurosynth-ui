import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';
import Sidebar from '.';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', icon: FiHome, onClick: () => console.log('Clicked on Home') },
    { label: 'Profile', icon: FiUser, onClick: () => console.log('Clicked on Profile') },
    { label: 'Settings', icon: FiSettings, onClick: () => console.log('Clicked on Settings') },
  ],
};

export const WithMoreItems = Template.bind({});
WithMoreItems.args = {
  items: [
    { label: 'Home', icon: FiHome, onClick: () => console.log('Clicked on Home') },
    { label: 'Profile', icon: FiUser, onClick: () => console.log('Clicked on Profile') },
    { label: 'Settings', icon: FiSettings, onClick: () => console.log('Clicked on Settings') },
    { label: 'Dashboard', icon: FiHome, onClick: () => console.log('Clicked on Dashboard') },
    { label: 'Messages', icon: FiUser, onClick: () => console.log('Clicked on Messages') },
  ],
};
