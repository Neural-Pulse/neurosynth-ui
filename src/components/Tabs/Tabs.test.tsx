import { render, fireEvent } from '@testing-library/react';
import Tabs from '.';
import '@testing-library/jest-dom';

describe('Tabs', () => {
    const tabsMock = [
        { id: 'tab1', title: 'Tab 1', content: 'Content of Tab 1' },
        { id: 'tab2', title: 'Tab 2', content: 'Content of Tab 2' },
    ];

    it('renders the Tabs component', () => {
        const { getByText } = render(<Tabs tabs={tabsMock} />);
        expect(getByText('Tab 1')).toBeInTheDocument();
    });

    it('changes tab on click', () => {
        const { getByText } = render(<Tabs tabs={tabsMock} />);

        fireEvent.click(getByText('Tab 2'));
        expect(getByText('Content of Tab 2')).toBeInTheDocument();
    });
});