export interface Breadcrumb {
    label: string;
    path?: string;
}

export interface BreadcrumbsProps {
    crumbs: Breadcrumb[];
}
