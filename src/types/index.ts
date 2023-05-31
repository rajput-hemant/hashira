export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  url?: string;
  ogImage?: string;
  mainNav: NavItem[];
  links: {
    twitter: string;
    github: string;
    discord: string;
  };
};
