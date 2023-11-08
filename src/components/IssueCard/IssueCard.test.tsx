import { render, screen } from '@testing-library/react';
import IssueCard from '.';
import '@testing-library/jest-dom';

describe('IssueCard', () => {
    const issueCardProps = {
        title: 'Sample Issue',
        description: 'This is a sample issue description',
        priority: 'High',
        priorityColor: 'text-red-500',
        dueDate: '2023-11-06',
        statusColor: 'border-green-500',
        type: 'Bug',
    };

    it('renders the issue card with all provided information', () => {
        render(<IssueCard {...issueCardProps} />);
        expect(screen.getByText(issueCardProps.title)).toBeInTheDocument();
        expect(screen.getByText(issueCardProps.description)).toBeInTheDocument();
        expect(screen.getByText(issueCardProps.priority)).toBeInTheDocument();
        expect(screen.getByText(new Date(issueCardProps.dueDate).toLocaleDateString())).toBeInTheDocument();
    });

    it('displays the correct icon based on the issue type', () => {
        const { rerender } = render(<IssueCard {...issueCardProps} />);
        expect(screen.getByTestId('icon-bug')).toBeInTheDocument();

        rerender(<IssueCard {...issueCardProps} type="Feature" />);
        expect(screen.getByTestId('icon-feature')).toBeInTheDocument();

        rerender(<IssueCard {...issueCardProps} type="Task" />);
        expect(screen.getByTestId('icon-task')).toBeInTheDocument();
    });

    it('applies the correct priority and status colors', () => {
        render(<IssueCard {...issueCardProps} />);
        const prioritySpan = screen.getByText(issueCardProps.priority);
        expect(prioritySpan).toHaveClass(issueCardProps.priorityColor);

        const issueCardDiv = screen.getByRole('article');
        expect(issueCardDiv).toHaveClass(issueCardProps.statusColor);
    });
});
