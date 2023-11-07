import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Collapse from '.';

describe('Collapse', () => {
    it('renders the title', () => {
        const title = 'Click to view details';
        render(<Collapse title={title}><p>Details content</p></Collapse>);

        expect(screen.getByText(title)).toBeInTheDocument();
    });

    it('toggles content on title click', () => {
        const title = 'Click to view details';
        const details = 'Details content';
        render(<Collapse title={title}><p>{details}</p></Collapse>);

        expect(screen.queryByText(details)).not.toBeInTheDocument();

        fireEvent.click(screen.getByText(title));
        expect(screen.getByText(details)).toBeInTheDocument();

        fireEvent.click(screen.getByText(title));
        expect(screen.queryByText(details)).not.toBeInTheDocument();
    });

    it('displays the correct toggle icon', () => {
        const title = 'Click to view details';
        render(<Collapse title={title}><p>Details content</p></Collapse>);

        expect(screen.getByText('+')).toBeInTheDocument();

        fireEvent.click(screen.getByText(title));
        expect(screen.getByText('−')).toBeInTheDocument();
    });
});