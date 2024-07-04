import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IssueCard from '.';
import { IssueCardProps } from './IssueCard.types';

const issueCardProps: IssueCardProps = {
    title: 'Test Issue',
    description: 'This is a test issue description.',
    priority: 'High',
    priorityColor: 'text-red-600',
    dueDate: '2023-04-30',
    status: 'Open',
    statusColor: 'bg-cyan-blue',
    type: 'Bug',
};

describe('IssueCard', () => {
    it('renders the title and description', () => {
        render(<IssueCard {...issueCardProps} />);
        expect(screen.getByText(issueCardProps.title)).toBeInTheDocument();
        expect(screen.getByText(issueCardProps.description)).toBeInTheDocument();
    });

    it('displays the correct priority and due date', () => {
        render(<IssueCard {...issueCardProps} />);
        expect(screen.getByText(issueCardProps.priority)).toBeInTheDocument();
        expect(screen.getByText(new Date(issueCardProps.dueDate).toLocaleDateString())).toBeInTheDocument();
    });

    it('renders the correct icon based on issue type', () => {
        render(<IssueCard {...issueCardProps} />);
        expect(screen.getByTestId('icon-bug')).toBeInTheDocument();
    });

    it('applies the correct status color', () => {
        render(<IssueCard {...issueCardProps} />);
        const issueCard = screen.getByRole('article');
        expect(issueCard).toHaveClass(issueCardProps.statusColor);
    });
});
