import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PasswordField from '.';

describe('PasswordField', () => {
    const defaultProps = {
        id: 'password',
        name: 'password',
        placeholder: 'Enter your password',
        onChange: jest.fn(),
    };

    it('renders the password field with the provided props', () => {
        render(<PasswordField {...defaultProps} />);
        const passwordInput = screen.getByPlaceholderText('Enter your password');
        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('renders the label when provided', () => {
        render(<PasswordField {...defaultProps} label="Password" />);
        const label = screen.getByText('Password');
        expect(label).toBeInTheDocument();
    });

    it('toggles password visibility when the button is clicked', () => {
        render(<PasswordField {...defaultProps} />);
        const toggleButton = screen.getByRole('button');
        fireEvent.click(toggleButton);
        expect(screen.getByPlaceholderText('Enter your password')).toHaveAttribute('type', 'text');
        fireEvent.click(toggleButton);
        expect(screen.getByPlaceholderText('Enter your password')).toHaveAttribute('type', 'password');
    });
});
