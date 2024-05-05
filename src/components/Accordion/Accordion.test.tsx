import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from '.';
import '@testing-library/jest-dom';

describe('Accordion', () => {
    const items = [
        { title: 'Section 1', content: 'Content 1', isOpenInitially: true },
        { title: 'Section 2', content: 'Content 2' }
    ];

    it('renders all titles', () => {
        render(<Accordion items={items} />);
        expect(screen.getByText('Section 1')).toBeInTheDocument();
        expect(screen.getByText('Section 2')).toBeInTheDocument();
    });

    it('initially displays content for initially open items', () => {
        render(<Accordion items={items} />);
        expect(screen.getByText('Content 1')).toBeInTheDocument();
    });

    it('toggles content visibility on title click', () => {
        render(<Accordion items={items} />);
        fireEvent.click(screen.getByText('Section 2'));
        expect(screen.getByText('Content 2')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Section 2'));
        expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    });
});
