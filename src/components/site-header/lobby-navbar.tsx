"use client";

import React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import type { User } from "next-auth";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { UserDropdown } from "./user-dropdown";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Movies", href: "/movies" },
  { name: "TV Series", href: "/tv-series" },
  { name: "Most Popular", href: "/most-popular" },
  { name: "Top Airing", href: "/top-airing" },
];

type LobbyNavbarProps = {
  user?: User;
};

export function LobbyNavbar({ user }: LobbyNavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar maxWidth="xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand
          as={Link}
          href="/"
          className="items-center text-xl font-bold lowercase text-foreground"
        >
          <span>{siteConfig.name}</span>
          <span className="text-primary-500">.</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex">
        {menuItems.map(({ name, href }) => {
          const isActive = pathname.startsWith(href);
          return (
            <NavbarItem key={name} isActive={isActive}>
              <Link
                as={NextLink}
                href={href}
                color="foreground"
                className={cn(
                  "text-sm text-foreground-500",
                  isActive && "text-foreground"
                )}
              >
                {name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <ThemeToggle variant="flat" />
        <UserDropdown user={user} />
      </NavbarContent>

      {/* for small devices */}
      <NavbarMenu>
        {menuItems.map(({ name, href }) => {
          const isActive = pathname.startsWith(href);

          return (
            <NavbarMenuItem key={name} isActive={isActive}>
              <Link
                as={NextLink}
                href={href}
                color="foreground"
                className={cn(
                  "text-foreground-500",
                  isActive && "text-foreground"
                )}
              >
                {name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
