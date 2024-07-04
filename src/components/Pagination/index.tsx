import React, { memo } from 'react';
import { PaginationProps } from './Pagination.types';

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const generatePages = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            let className = i === currentPage ? 'bg-neuralpulse-green text-white' : 'text-neuralpulse-gray hover:bg-neuralpulse-light-green';
            pages.push(
                <button key={i} className={`font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline transition duration-150 ease-in-out ${className}`} onClick={() => onPageChange(i)}>
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="flex space-x-2">
            {generatePages()}
        </div>
    );
};

export default memo(Pagination);
