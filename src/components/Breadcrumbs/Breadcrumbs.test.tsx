import { render, screen } from '@testing-library/react';
import Breadcrumbs from '.';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('Breadcrumbs', () => {
    const crumbs = [
        { label: 'Home', path: '/' },
        { label: 'Library', path: '/library' },
        { label: 'Data' }
    ];

    it('renders the correct number of breadcrumb items', () => {
        render(<Breadcrumbs crumbs={crumbs} />, { wrapper: MemoryRouter });
        expect(screen.getAllByRole('listitem').length).toBe(3);
    });

    it('renders the correct labels', () => {
        render(<Breadcrumbs crumbs={crumbs} />, { wrapper: MemoryRouter });
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Library')).toBeInTheDocument();
        expect(screen.getByText('Data')).toBeInTheDocument();
    });
});
