export interface SideNavigationProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  children?: React.ReactNode;
}
