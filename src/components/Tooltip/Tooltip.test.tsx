import { render, fireEvent } from '@testing-library/react';
import Tooltip from '.';
import '@testing-library/jest-dom';

describe('Tooltip', () => {
    it('shows the tooltip message on hover', () => {
        const { getByText, queryByText } = render(
            <Tooltip message="Tooltip message">
                <div>Hover over me!</div>
            </Tooltip>
        );

        expect(queryByText('Tooltip message')).not.toBeInTheDocument();

        fireEvent.mouseEnter(getByText('Hover over me!'));

        expect(getByText('Tooltip message')).toBeInTheDocument();

        fireEvent.mouseLeave(getByText('Hover over me!'));
        expect(queryByText('Tooltip message')).not.toBeInTheDocument();
    });
});