export interface DropdownMenuItem {
    label: string;
    action: () => void;
}
export interface DropdownMenuProps {
    items: DropdownMenuItem[];
    label: string;
}
