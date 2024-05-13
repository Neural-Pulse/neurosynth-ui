export interface SideBarItem {
  label: string;
  icon: React.ElementType;
  onClick: () => void;
}

export interface Theme {
  background: string;
  textColor: string;
  hoverBackgroundColor: string;
  focusOutline: string;
}

export interface SideBarProps {
  items: SideBarItem[];
  isOpen: boolean;
  theme?: Theme;
  className?: string;
  itemClassName?: string;
  titleClassName?: string;
}