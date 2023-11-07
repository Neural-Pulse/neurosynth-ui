import { Story, Meta } from '@storybook/react';
import Warning from '.';
import { WarningProps } from './Warning.types';

export default {
    title: 'Components/Warning',
    component: Warning,
    argTypes: {
        variant: {
            control: { type: 'select', options: ['success', 'warning', 'error'] },
        },
    },
} as Meta;

const Template: Story<WarningProps> = (args) => <Warning {...args} />;

export const Success = Template.bind({});
Success.args = {
    text: 'Operação realizada com sucesso!',
    variant: 'success',
};

export const WarningStory = Template.bind({});
WarningStory.args = {
    text: 'Atenção: Verifique os dados inseridos.',
    variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
    text: 'Erro: Não foi possível processar a sua solicitação.',
    variant: 'error',
};
