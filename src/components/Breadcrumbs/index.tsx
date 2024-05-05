import React from 'react';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
    return (
        <nav className="text-sm text-neuralpulse-gray" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
                {crumbs.map((crumb, index) => (
                    <li key={index} className={index === crumbs.length - 1 ? 'text-neuralpulse-dark font-bold' : ''}>
                        {index !== 0 && <span className="mx-2">/</span>}
                        {crumb.path ? (
                            <Link to={crumb.path} className="text-neuralpulse-green hover:text-neuralpulse-light-green">
                                {crumb.label}
                            </Link>
                        ) : (
                            <span>{crumb.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
