"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NavbarUi,
} from "@nextui-org/navbar";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Movies", href: "/movies" },
  { name: "TV Series", href: "/tv-series" },
  { name: "Most Popular", href: "/most-popular" },
  { name: "Top Airing", href: "/top-airing" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <NavbarUi isBlurred maxWidth="xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="items-center text-xl font-bold lowercase">
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
                href={href}
                color="foreground"
                className={cn(
                  "text-foreground-500",
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
        <Button
          as={Link}
          href="/login"
          color="primary"
          variant="flat"
          className="font-bold"
        >
          Login
        </Button>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map(({ name, href }) => {
          const isActive = pathname.startsWith(href);

          return (
            <NavbarMenuItem key={name} isActive={isActive}>
              <Link
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
    </NavbarUi>
  );
}
