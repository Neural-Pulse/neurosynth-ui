import { render, screen } from '@testing-library/react';
import ProgressBar from '.';
import '@testing-library/jest-dom';
import { hexToRGB } from '../../utils/colorUtils';

describe('ProgressBar', () => {
    it('renders with default props', () => {
        render(<ProgressBar progress={50} />);
        const progressBar = screen.getByRole('progressbar');
        expect(progressBar).toBeInTheDocument();
        expect(progressBar).toHaveStyle('width: 50%');
    });

    it('has the correct aria attributes for accessibility', () => {
        render(<ProgressBar progress={75} />);
        const progressBar = screen.getByRole('progressbar');
        expect(progressBar).toHaveAttribute('aria-valuenow', '75');
        expect(progressBar).toHaveAttribute('aria-valuemin', '0');
        expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    });

    it('renders with a custom color when provided', () => {
        const customColor = '#204a87';
        render(<ProgressBar progress={50} color={customColor} />);
        const progressBar = screen.getByTestId('progress-bar');
        expect(progressBar.style.backgroundColor).toBe(hexToRGB(customColor));
    });

    it('renders with a label if provided', () => {
        const label = 'Loading...';
        render(<ProgressBar progress={80} label={label} />);
        expect(screen.getByText(label)).toBeInTheDocument();
    });

});