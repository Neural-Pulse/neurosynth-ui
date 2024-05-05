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

    it('calls the onChange handler when the password value changes', () => {
        render(<PasswordField {...defaultProps} />);
        const passwordInput = screen.getByPlaceholderText('Enter your password');
        fireEvent.change(passwordInput, { target: { value: 'secret123' } });
        expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    });

    it('toggles the password visibility when the toggle button is clicked', () => {
        render(<PasswordField {...defaultProps} />);
        const passwordInput = screen.getByPlaceholderText('Enter your password');
        const toggleButton = screen.getByRole('button');

        expect(passwordInput).toHaveAttribute('type', 'password');

        fireEvent.click(toggleButton);
        expect(passwordInput).toHaveAttribute('type', 'text');

        fireEvent.click(toggleButton);
        expect(passwordInput).toHaveAttribute('type', 'password');
    });
});
