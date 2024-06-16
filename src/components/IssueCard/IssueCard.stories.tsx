import { Meta, StoryFn } from "@storybook/react";
import IssueCard from ".";
import { IssueCardProps } from "./IssueCard.types";

export default {
  title: "Components/IssueCard",
  component: IssueCard,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    priority: {
      control: { type: "select", options: ["Alta", "Média", "Baixa"] },
    },
    priorityColor: {
      control: {
        type: "select",
        options: ["text-red-600", "text-yellow-600", "text-green-600"],
      },
    },
    dueDate: { control: "date" },
    status: {
      control: {
        type: "select",
        options: ["Aberta", "Em progresso", "Fechada"],
      },
    },
    statusColor: {
      control: {
        type: "select",
        options: ["bg-cyan-blue", "bg-yellow-500", "bg-dark-gray"],
      },
    },
    type: {
      control: { type: "select", options: ["Bug", "Feature", "Task"] },
    },
  },
} as Meta;

const Template: StoryFn<IssueCardProps> = (args) => <IssueCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Corrigir bug no login",
  description: "O botão de login não está funcionando em dispositivos móveis.",
  priority: "Baixa",
  priorityColor: "text-green-600",
  dueDate: "2023-04-30",
  status: "Aberta",
  statusColor: "bg-cyan-blue",
  type: "Bug",
};
export const Feature = Template.bind({});
Feature.args = {
  title: "Criar acesso para usuários",
  description: "Criar acesso para usuários",
  priority: "Baixa",
  priorityColor: "text-green-600",
  dueDate: "2023-04-30",
  status: "Aberta",
  statusColor: "bg-cyan-blue",
  type: "Feature",
};
export const Task = Template.bind({});
Task.args = {
  title: "Criar componente de Button",
  description: "Criar componente de button",
  priority: "Baixa",
  priorityColor: "text-green-600",
  dueDate: "2023-04-30",
  status: "Aberta",
  statusColor: "bg-cyan-blue",
  type: "Task",
};
