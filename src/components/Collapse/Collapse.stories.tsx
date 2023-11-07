import { Meta, StoryFn } from '@storybook/react';
import Collapse from '.';
import { CollapseProps } from './Collapse.types';

export default {
    title: 'Components/Collapse',
    component: Collapse,
} as Meta;

const Template: StoryFn<CollapseProps> = (args) => <Collapse {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Clique para expandir',
    children: <div>Conteúdo colapsável</div>,
};
