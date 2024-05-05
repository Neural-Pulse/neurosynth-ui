import { StoryFn, Meta } from '@storybook/react';
import Board from '.';
import { BoardProps } from './Board.types';

export default {
    title: 'Components/Board',
    component: Board,
} as Meta;

const Template: StoryFn<BoardProps> = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
    columns: [
        { id: 'col1', title: 'To Do', items: [{ id: 'item1', content: 'Task 1' }] },
        { id: 'col2', title: 'Done', items: [{ id: 'item2', content: 'Task 2' }] }
    ],
    onDragEnd: (result) => console.log(result)
};
