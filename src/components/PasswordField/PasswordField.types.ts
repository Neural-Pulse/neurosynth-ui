import { ChangeEventHandler } from 'react';

export interface PasswordFieldProps {
    id: string;
    name: string;
    placeholder?: string;
    value?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    label?: string;
}
