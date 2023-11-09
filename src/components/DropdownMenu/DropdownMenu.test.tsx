import { render, fireEvent } from '@testing-library/react';
import DropdownMenu from '.';
import '@testing-library/jest-dom';

describe('DropdownMenu', () => {
    const mockItems = [
        { label: 'Action One', action: jest.fn() },
        { label: 'Action Two', action: jest.fn() },
    ];

    it('should render without crashing', () => {
        render(<DropdownMenu items={mockItems} label="Test Menu" />);
    });

    it('should toggle dropdown', () => {
        const { getByText, queryByText } = render(<DropdownMenu items={mockItems} label="Test Menu" />);

        fireEvent.click(getByText('Test Menu'));
        expect(queryByText('Action One')).toBeInTheDocument();

        fireEvent.click(getByText('Test Menu'));
        expect(queryByText('Action One')).not.toBeInTheDocument();
    });
});