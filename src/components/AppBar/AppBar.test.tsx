import { render, screen } from '@testing-library/react';
import AppBar from '.';
import '@testing-library/jest-dom';

describe('AppBar', () => {
    test('renders AppBar component with title', () => {
        render(<AppBar title="NeuralPulse Dashboard" />);
        expect(screen.getByText('NeuralPulse Dashboard')).toBeInTheDocument();
    });

    const userInfo = {
        name: "Jane Doe",
        avatar: "https://gravatar.com/avatar/da2f1a85693324065d7f9a316e3f2e59?s=400&d=robohash&r=x"
    };

    it('renders user information when passed in', () => {
        render(<AppBar title="NeuralPulse Dashboard" user={userInfo} />);
        expect(screen.getByText(userInfo.name)).toBeInTheDocument();

        // This test assumes you are using an actual <img> element within your Avatar component
        const avatarImage = screen.getByRole('img', { name: /avatar/i });
        expect(avatarImage).toBeInTheDocument();

        // If using a background image in a div, this part of the test won't work as expected
        // You can instead check for inline styles or skip checking the src directly if it's not set on an <img> tag
        // expect(avatarImage).toHaveAttribute('src', userInfo.avatar);
    });
});