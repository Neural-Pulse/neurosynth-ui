/// <reference types="react" />
export interface TextFieldProps {
    id: string;
    name: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'password' | 'email' | 'number';
    label?: string;
}
