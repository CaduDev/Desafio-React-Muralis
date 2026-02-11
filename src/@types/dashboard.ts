import type { JSX } from "react";

export interface DashboardProps {
  showTitlePage?: boolean;
  showTriggerButton?: boolean;
  showNavbar?: boolean;
  showButtonSwitchTheme?: boolean;
  menuList:  {
    id: number;
    icon: (accessibility: any) => JSX.Element;
    title: string;
    navLabel: string;
    uri: string;
  }[];
}