export interface Option {
    value: string | number;
    label: string;
}

export interface Theme {
    labelColor?: string;
    borderColor?: string;
    focusRingColor?: string;
    shadow?: string;
}

export interface SelectProps {
    id: string;
    label: string;
    options: Option[];
    theme?: Theme;
    labelClass?: string;
    selectClass?: string;
    [x: string]: any; // para props adicionais como 'disabled', 'multiple', etc.
}