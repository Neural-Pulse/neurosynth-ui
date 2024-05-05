import { render, screen } from '@testing-library/react';
import Timeline from '.';
import '@testing-library/jest-dom';

describe('Timeline', () => {
    const items = [
        { title: 'Event 1', description: 'Description of event 1', time: '2023-01-01' },
        { title: 'Event 2', description: 'Description of event 2', time: '2023-01-02' }
    ];

    it('renders all timeline items vertically by default', () => {
        render(<Timeline items={items} />);
        expect(screen.getByText('Event 1')).toBeInTheDocument();
        expect(screen.getByText('Event 2')).toBeInTheDocument();
    });

    it('renders all timeline items horizontally when specified', () => {
        render(<Timeline items={items} orientation="horizontal" />);
        expect(screen.getByText('Event 1')).toBeInTheDocument();
        expect(screen.getByText('Event 2')).toBeInTheDocument();
        // Additional checks can be added here for horizontal layout specifics
    });
});
