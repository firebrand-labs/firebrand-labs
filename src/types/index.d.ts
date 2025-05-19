export type SubNavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  type?: string;
};

export type NavItem = SubNavItem & {
  subItems: SubNavItem[];
};

export type MainNavItems = NavItem[];
