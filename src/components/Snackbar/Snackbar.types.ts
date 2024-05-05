export interface SnackbarProps {
    message: string;
    duration?: number;
    onClose?: () => void;
}
