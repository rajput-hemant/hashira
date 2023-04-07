import { NavItem } from "@/types/nav";

interface SiteConfig {
  name: string;
  description: string;
  mainNav: NavItem[];
  links: { [key: string]: string };
}

export const siteConfig: SiteConfig = {
  name: "Hashira",
  description: "A simple and fast Anime Streaming Website",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
  },
};
