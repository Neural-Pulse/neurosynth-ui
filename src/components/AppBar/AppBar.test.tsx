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

        const avatarImage = screen.getByRole('img', { name: /avatar/i });
        expect(avatarImage).toBeInTheDocument();
    });

    it('renders without leading element', () => {
        render(<AppBar title="NeuralPulse Dashboard" />);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('renders without user information', () => {
        render(<AppBar title="NeuralPulse Dashboard" />);
        expect(screen.queryByText(userInfo.name)).not.toBeInTheDocument();
        expect(screen.queryByRole('img', { name: /avatar/i })).not.toBeInTheDocument();
    });
});
