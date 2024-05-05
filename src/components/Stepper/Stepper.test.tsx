import { render, screen, fireEvent } from '@testing-library/react';
import Stepper from '.';
import '@testing-library/jest-dom';

describe('Stepper', () => {
    const steps = [
        { label: 'Step 1' },
        { label: 'Step 2' },
        { label: 'Step 3' }
    ];

    it('initializes with the first step active', () => {
        render(<Stepper steps={steps} />);
        expect(screen.getByText('Step 1')).toHaveClass('bg-neuralpulse-green');
    });

    it('moves to the next step when next button is clicked', () => {
        render(<Stepper steps={steps} />);
        fireEvent.click(screen.getByText('Next'));
        expect(screen.getByText('Step 2')).toHaveClass('bg-neuralpulse-green');
    });

    it('moves to the previous step when previous button is clicked', () => {
        render(<Stepper steps={steps} initialStep={1} />);
        fireEvent.click(screen.getByText('Previous'));
        expect(screen.getByText('Step 1')).toHaveClass('bg-neuralpulse-green');
    });
});
