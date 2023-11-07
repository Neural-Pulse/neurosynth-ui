import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NestedList from '.';

describe('NestedList', () => {
    const nestedListData = [
        {
            title: 'Item 1',
            subItems: [
                {
                    title: 'Sub Item 1',
                    subItems: [
                        { title: 'Sub Sub Item 1' },
                        { title: 'Sub Sub Item 2' }
                    ]
                },
                { title: 'Sub Item 2' }
            ]
        },
        { title: 'Item 2' }
    ];

    it('renders top-level items', () => {
        render(<NestedList items={nestedListData} />);
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('renders sub-items', () => {
        render(<NestedList items={nestedListData} />);
        expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
        expect(screen.getByText('Sub Item 2')).toBeInTheDocument();
    });

    it('renders nested sub-items', () => {
        render(<NestedList items={nestedListData} />);
        expect(screen.getByText('Sub Sub Item 1')).toBeInTheDocument();
        expect(screen.getByText('Sub Sub Item 2')).toBeInTheDocument();
    });
});