import { render, fireEvent, screen } from '@testing-library/react';
import Toolbar from '.';
import '@testing-library/jest-dom';

describe('Toolbar', () => {
    test('renders with title', () => {
        render(<Toolbar title="My Project Management App" onMenuClick={() => { }} />);
        expect(screen.getByText('My Project Management App')).toBeInTheDocument();
    });

    test('menu click event', () => {
        const mockMenuClick = jest.fn();
        render(<Toolbar title="Click Test" onMenuClick={mockMenuClick} />);
        fireEvent.click(screen.getByLabelText('Open main menu'));
        expect(mockMenuClick).toHaveBeenCalled();
    });
});