import { StoryFn, Meta } from '@storybook/react';
import SearchBar from '.';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as Meta<typeof SearchBar>;

const Template: StoryFn<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  onChange: (value: string) => console.log('Search value changed:', value),
  onSearch: () => console.log('Search button clicked'),
  placeholder: 'Search...',
};