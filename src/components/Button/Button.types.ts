export interface ButtonProps {
    label: string;
    onClick: () => void;
    variant: 'contained' | 'outlined' | 'text';
}
