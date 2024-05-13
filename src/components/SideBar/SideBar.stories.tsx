// SideBar.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MdHome, MdSettings } from 'react-icons/md';
import SideBar from './';

export default {
  title: 'Components/SideBar',
  component: SideBar,
} as Meta<typeof SideBar>;

const Template: StoryFn<typeof SideBar> = (args) => <SideBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  items: [
    { label: 'Home', icon: MdHome, onClick: () => console.log('Home clicked') },
  ],
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  isOpen: true,
  items: [
    { label: 'Home', icon: MdHome, onClick: () => console.log('Home clicked') },
    { label: 'Settings', icon: MdSettings, onClick: () => console.log('Settings clicked') },
  ],
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  isOpen: true,
  theme: {
    background: 'bg-blue-500',
    textColor: 'text-yellow-500',
    hoverBackgroundColor: 'hover:bg-red-500',
    focusOutline: 'focus:outline-none',
  },
  items: [
    { label: 'Home', icon: MdHome, onClick: () => console.log('Home clicked') },
  ],
};
