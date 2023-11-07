import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IssueCard from '.';

describe('IssueCard', () => {
    const issueProps = {
        title: 'Sample Issue',
        description: 'This is a sample issue description',
        priority: 'High',
        priorityColor: 'text-red-500',
        dueDate: '2023-11-07',
        statusColor: 'border-green-500',
        type: 'Bug'
    };

    it('renders the issue card with all provided information', () => {
        render(<IssueCard {...issueProps} />);

        expect(screen.getByText(issueProps.title)).toBeInTheDocument();
        expect(screen.getByText(issueProps.description)).toBeInTheDocument();
        expect(screen.getByText(issueProps.priority)).toBeInTheDocument();
        expect(screen.getByText(new Date(issueProps.dueDate).toLocaleDateString())).toBeInTheDocument();
    });

    it('displays the correct icon based on the issue type', () => {
        const { rerender } = render(<IssueCard {...issueProps} />);
        expect(screen.getByTestId(`icon-${issueProps.type}`)).toBeInTheDocument();

        rerender(<IssueCard {...issueProps} type="Feature" />);
        expect(screen.getByTestId('icon-Feature')).toBeInTheDocument();

        rerender(<IssueCard {...issueProps} type="Task" />);
        expect(screen.getByTestId('icon-Task')).toBeInTheDocument();
    });

    it('applies the correct priority and status colors', () => {
        render(<IssueCard {...issueProps} />);
        const prioritySpan = screen.getByText(issueProps.priority);
        expect(prioritySpan).toHaveClass(issueProps.priorityColor);

        const issueCardDiv = screen.getByTestId('issue-card');
        expect(issueCardDiv).toHaveClass(`border-l-4 ${issueProps.statusColor}`);
    });
});