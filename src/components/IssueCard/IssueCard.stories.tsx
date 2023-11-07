import { Story, Meta } from '@storybook/react';
import IssueCard from '.';
import { IssueCardProps } from './IssueCard.types';

export default {
    title: 'Components/IssueCard',
    component: IssueCard,
    argTypes: {
        priorityColor: { control: 'text' },
        statusColor: { control: 'text' },
        dueDate: { control: 'date' },
    },
} as Meta;

const Template: Story<IssueCardProps> = (args) => <IssueCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Corrigir bug no login',
    description: 'O botão de login não está funcionando em dispositivos móveis.',
    priority: 'Alta',
    priorityColor: 'text-red-600',
    dueDate: '2023-04-30',
    status: 'Aberta',
    statusColor: 'bg-cyan-blue',
};

export const HighPriority = Template.bind({});
HighPriority.args = {
    ...Default.args,
    priority: 'Alta',
    priorityColor: 'text-red-600',
};

export const MediumPriority = Template.bind({});
MediumPriority.args = {
    ...Default.args,
    priority: 'Média',
    priorityColor: 'text-yellow-600',
};

export const LowPriority = Template.bind({});
LowPriority.args = {
    ...Default.args,
    priority: 'Baixa',
    priorityColor: 'text-green-600',
};

export const ClosedStatus = Template.bind({});
ClosedStatus.args = {
    ...Default.args,
    status: 'Fechada',
    statusColor: 'bg-dark-gray',
};
