import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '.';

describe('Card', () => {
    it('renders the title and text', () => {
        const title = 'Test Title';
        const text = 'This is a test description for the card.';
        render(<Card title={title} text={text} />);

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it('has the correct styling', () => {
        const title = 'Styling Test';
        const text = 'Checking the styling of the card.';
        render(<Card title={title} text={text} />);

        const card = screen.getByText(title).parentElement;
        expect(card).toHaveClass('bg-white p-4 rounded-ms shadow-soft-green-glow');
    });
});
