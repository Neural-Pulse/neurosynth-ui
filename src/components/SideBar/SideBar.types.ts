import { IconType } from 'react-icons';

export interface SideBarItem {
  label: string;
  icon: IconType;
  onClick: () => void;
}

export interface SideBarProps {
  items: SideBarItem[];
  children?: React.ReactNode;
}