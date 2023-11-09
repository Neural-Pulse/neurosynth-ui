import { render, fireEvent } from '@testing-library/react';
import Tooltip from '.';
import '@testing-library/jest-dom';
import { TooltipProps } from './Tooltip.types';

describe('Tooltip', () => {
    it('shows the tooltip message on hover', () => {
        const { getByText, queryByText } = render(
            <Tooltip message="Tooltip message">
                <div>Hover over me!</div>
            </Tooltip>
        );

        fireEvent.mouseEnter(getByText('Hover over me!'));
        expect(queryByText('Tooltip message')).toBeInTheDocument();

        fireEvent.mouseLeave(getByText('Hover over me!'));
        expect(queryByText('Tooltip message')).not.toBeInTheDocument();
    });

    const positions: Array<[TooltipProps['position'], string]> = [
        ['top', 'bottom-full mb-2'],
        ['bottom', 'top-full mt-2'],
        ['left', 'right-full mr-2'],
        ['right', 'left-full ml-2'],
    ];
    it.each(positions)('displays tooltip in the %s position', (position, expectedClass) => {
        const { getByText, getByTestId } = render(
            <Tooltip position={position} message="Tooltip message">
                <div>Hover over me!</div>
            </Tooltip>
        );

        fireEvent.mouseEnter(getByText('Hover over me!'));
        const tooltip = getByTestId(`tooltip-${position}`);
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveClass(expectedClass);

        fireEvent.mouseLeave(getByText('Hover over me!'));

    });
});