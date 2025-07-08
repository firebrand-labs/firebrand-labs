export type SubNavItem = {
  title: string;
  href: string;
  target: string;
  disabled?: boolean;
  type?: string;
};

export type NavItem = SubNavItem & {
  subItems: SubNavItem[];
};

export type MainNavItems = NavItem[];

export type CountryData = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [languageCode: string]: {
        official: string;
        common: string;
      };
    };
  };
};
